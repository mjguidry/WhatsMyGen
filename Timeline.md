---
layout: page
title: Timeline
navigation_weight: 3
---
<nav class="main-nav">
  <ul>
    {% assign navigation_pages = site.html_pages | sort: 'navigation_weight' %}
    {% for p in navigation_pages %}
      {% if p.navigation_weight %}
        <li>
          <a href="mike-gen/"+"{{ p.url }}" {% if p.url == page.url %}class="active"{% endif %}>
            {{ p.title }}
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</nav>
{% include Timeline.html %}
