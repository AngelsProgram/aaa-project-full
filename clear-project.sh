find . -name "node_modules" -type d -exec rm -rf {} +
find . -name "package-lock.json" -type f -exec rm -f {} +

git add *
git clean -dfX
git rm -rf --cached .
