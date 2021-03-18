# scripts/post-build.sh

#!/bin/bash

echo "post-build.sh – moving assets of frontend build to production/ folder."

mkdir $PWD/build/production
find $PWD/build/ -type f -print0 | xargs -0 mv -t $PWD/build/production
mv $PWD/build/production/index.html $PWD/build
