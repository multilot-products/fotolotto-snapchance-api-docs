# Markdown generation from swagger/openApi #
This project is using [widdershins](https://github.com/Mermade/widdershins) under the hood to convert the swagger YAML to markdown

## Run locally

```
bundle install
bundle exec middleman server
```

## Update the API documentation
Make sure you have the [fotolotto-snapchance-api](https://github.com/multilot-products/fotolotto-snapchance-api) project checked out with the correct branch next to this project. We grab the swagger documentation from the `public/apiDocs.yaml` swagger file

Run:
```
npm run convert
```

This will parse the swagger yaml and update the `source/index.html.md` to include the updated api documentation.


## Deploy to github pages (The master branch is deployed to gh pages automatically)
```
./deploy.sh
```

