# .NET Core authentication with JWT

### 1. Install package

```
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="3.0.0" />
```

### 2. Add authentication

```cs
public static class JwtAuthenticationExtension
{
    public static void ConfigureAuth(this IServiceCollection services)
    {
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(cfg =>
        {
            cfg.RequireHttpsMetadata = false;
            cfg.SaveToken = true;
            cfg.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = "Issuer",

                ValidateAudience = true,
                ValidAudience = "Audience",

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secret-key")),

                ClockSkew = TimeSpan.Zero
            };
        });
    }
}
```

config in `Startup`:

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.ConfigureAuth();
}
```

### 3. Generate token

```cs
string GetToken(ApplicationUser user, string role)
{
    var claims = new List<Claim>
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        new Claim(ClaimTypes.Email, user.UserName),
        new Claim(ClaimTypes.GivenName, user.FullName ?? "Anonymous"),
        new Claim(ClaimTypes.Role, role),
    };

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secret-key"));

    var token = new JwtSecurityToken(
        issuer: "Issuer",
        audience: "Issuer",
        claims: claims,
        notBefore: DateTime.Now,
        expires: DateTime.Now.AddMinutes(500),
        signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
}
```

### 4. Using

```cs
public class AuthController
{
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly UserManager<ApplicationUser> userManager;
    private readonly IUserService userService;

    public AuthController(
        SignInManager<ApplicationUser> signInManager,
        UserManager<ApplicationUser> userManager, 
        IUserService userService)
    {
        this.signInManager = signInManager;
        this.userService = userService;
        this.userManager = userManager;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(LoginViewModel login)
    {
        var result = await signInManager.PasswordSignInAsync(login.Username, login.Password, isPersistent: true, lockoutOnFailure: false);
        if (result.Succeeded)
        {
            var user = await userManager.FindByEmailAsync(login.Username);
            var roles = await userManager.GetRolesAsync(user);
            return Ok(new
            {
                Token = userService.GetToken(user, roles.First()),
                User = user.FullName
            });
        }

        return Ok(new { Error = "Invalid login attempt" });
    }
}
```
