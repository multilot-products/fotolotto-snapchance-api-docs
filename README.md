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

## Deploy to github pages
```
./deploy.sh
```

