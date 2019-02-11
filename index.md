---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Simple man. Simple code. Simple life.
---

<div class="posts">
    {% for post in site.posts %}
    <div class="post-entry">
        <div class="center">
            <div class="entry-content">
                <div class="entry__meta">
                    <span class="post__date">{{ post.date | date_to_string }}</span>
                    {% assign t = post.tags | array_to_sentence_string %}                    
                    {% if t != '' %}
                        <span class="meta-separator"></span>
                        <span class="tags">
                            {% for tag in post.tags %}
                                <a href="#" title="{{ tag }}" class="tag">#{{ tag }}</a>
                            {% endfor %}
                        </span>
                    {% endif %}
                </div>
                <h4 class="entry-title">
                    <a href="{{ post.url }}" title="{{ post.title }}" class="post__link">{{ post.title }}</a>
                </h4>
            </div>
        </div>
    </div>
    {% endfor %}
</div>