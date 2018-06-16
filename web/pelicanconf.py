#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Vivas Nos Queremos Ecuador'
SITENAME = 'Vivas Nos Queremos Ecuador'
SITEURL = ''
THEME = 'themes/vivas'

PATH = 'content'

TIMEZONE = 'America/Guayaquil'

DEFAULT_LANG = 'es'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

RELATIVE_URLS = True

# Custom variables for our project, they are accessible on the templates
# under the VIVAS dictionary.
VIVAS = {
    'map_data': open('map_data.json').read()
}
