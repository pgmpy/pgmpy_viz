pgmpy_viz
=========

pgmpy_viz is an application that comes battries included with the pgmpy library.
It is a package that allows user to visually model graphs via their browser.
These graphs will be mapped to pgmpy models internally.


Installation
------------
It is optional but suggest to start and activate a virtualenv before the steps ahead.

Change directory into the application

        $ cd pgmpy_viz


Initialize submodule(s)

        $ ./update

Install dependencies

        $ pip install -r requirements.txt

Run a local development server (on port 8000 by default)

        $ python manage.py runserver

Now visit the following url in your browser:

        http://localhost:8000/

You will see a sample graph. Click on anywhere in the graph, a small node is created.

Note
----
The package is currently incomplete and unstable. Kindly use with caution.

