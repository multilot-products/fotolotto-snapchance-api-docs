# Markdown generation from swagger/openApi #


Dependancy [widdershins](https://github.com/Mermade/widdershins)
```
npm i -g widdershins
```

Checkout [fotolotto-snapchance-api](https://github.com/multilot-products/fotolotto-snapchance-api) at the same level of this project

```
widdershins ../fotolotto-snapchance-api/public/apiDocs.yaml -o source/index.html.md
```

## Run locally

```
bundle install
bundle exec middleman server
```

## Update the API documentation
Make sure you have the `fotolotto-snapchance-api` project checked out with the correct branch next to this project. We grab the swagger documentation from the `public/apiDocs.yaml` swagger file

Run:
```
npm run convert
```

This will parse the swagger yaml and update the `source/index.html.md` to include the updated api documentation.


## Deploy to github pages (The master branch is deployed to gh pages automatically)
```
./deploy.sh
```

