#!/bin/sh

# Credits: http://stackoverflow.com/a/750191

git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Nathecia'
    GIT_AUTHOR_EMAIL='nathecia02@hotmail.com'
    GIT_COMMITTER_NAME='Nathecia'
    GIT_COMMITTER_EMAIL='nathecia02@hotmail.com'
  " HEAD