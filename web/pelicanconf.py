#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import io

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

DEFAULT_PAGINATION = 9

RELATIVE_URLS = True

STATIC_PATHS = [
    'images',
    'extra',  # this
]
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'}  # and this
}

# Custom variables for our project, they are accessible on the templates
# under the VIVAS dictionary.
VIVAS = {
    'map_data': io.open('map_provincias_data.json', 'r', encoding='utf-8').read(),
    'total_pais': io.open('totalPais.json', 'r', encoding='utf-8').read()
}

