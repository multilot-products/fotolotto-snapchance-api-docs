const widdershins = require('widdershins');
const fs = require('fs');
const YAML = require('yaml')

const options = {
  codeSamples: true,
  httpsnippet: false,
  language_tabs: [{csharp: "C#"}, {shell: "Shell"}, {http: "HTTP"}, {'javascript': 'JavaScript'}, {'javascript--node': 'Node.JS'}, {ruby: "Ruby"}],
  templateCallback: function (templateName, stage, data) {
    return data;
  },
  theme: 'darkula',
  search: true,
  sample: true,
  discovery: false,
  includes: ['introduction', 'flows'],
  shallowSchemas: false,
  tocSummary: false,
  headings: 2,
  yaml: false,
  resolve: false,
  toc_footers: [{ url: "https://snapchance.no", description: "SnapChance Norway" }]

}

const fileData = fs.readFileSync('../fotolotto-snapchance-api/public/apiDocs.yaml', 'utf8');
const data  = YAML.parse(fileData);

widdershins.convert(data, options)
  .then(markdownOutput => {
    // markdownOutput contains the converted markdown
    fs.writeFileSync('./source/index.html.md', markdownOutput, 'utf8');
  })
  .catch(err => {
    console.error(err);
  });
