---
title: SnapChance v2.0.0
language_tabs:
  - csharp: C#
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--node: Node.JS
  - ruby: Ruby
toc_footers:
  - <a href="https://snapchance.no">SnapChance Norway</a>
includes:
  - introduction
  - flows
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="snapchance">SnapChance v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api-stg3.snapchance.no">https://api-stg3.snapchance.no</a>

Web: <a href="https://snapchance.no">SnapChance</a> 

# Authentication

- HTTP Authentication, scheme: bearer The SnapChance API offers JWT (JSON Web Token) Authentication. JWT is a short lifetime token that is generated and returned when the player authenticates to the SnapChance API.  Players can obtain a JWT token by providing valid credentials (emailId and password) to /session endpoint. The token has a specific expiration time.

<pre>curl --request POST \
  --url https://api-stg3.snapchance.no/session \
  --header 'Content-Type: application/json' \
  --data '{"email":"user@email.com","password":"ComplexPassword123"}'</pre>

The valid JWT token must be supplied as part of the header to access API's all other endpoints.

<pre>curl --request GET \
  --url https://api-stg3.snapchance.no/profile \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxNzM0MzI2MywicGxheWVyX2lkIjoyLCJlbWFpbCI6IjU5Y2MifQ.fUyn-pli3fe6knErVCUj6WQ_5NbRR6_RMqtaB7Q21t4'</pre>

<h1 id="snapchance-player">Player</h1>

Player and Profile management and reporting

## Deactivate Player

<a id="opIdDeactivate Player"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/deactivation");
var request = new RestRequest(Method.POST);
request.AddHeader("Accept", "text/plain");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/deactivation \
  --header 'Accept: text/plain' \
  --header 'Authorization: Bearer {access-token}'
```

```http
POST /deactivation HTTP/1.1
Accept: text/plain
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/deactivation");
xhr.setRequestHeader("Accept", "text/plain");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/deactivation",
  "headers": {
    "Accept": "text/plain",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/deactivation")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Accept"] = 'text/plain'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`POST /deactivation`

This endpoint is used for a player to deactivate their own account permanently.

> Example responses

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="deactivate-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Player is Deactivated|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Loss Limit

<a id="opIdUpdate Loss Limit"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/loss_limits");
var request = new RestRequest(Method.PUT);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"daily_loss_limit\":1500,\"weekly_loss_limit\":\"2900\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request PUT \
  --url https://api-stg3.snapchance.no/loss_limits \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"daily_loss_limit":1500,"weekly_loss_limit":"2900"}'
```

```http
PUT /loss_limits HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 52

{"daily_loss_limit":1500,"weekly_loss_limit":"2900"}
```

```javascript
const data = JSON.stringify({
  "daily_loss_limit": 1500,
  "weekly_loss_limit": "2900"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://api-stg3.snapchance.no/loss_limits");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PUT",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/loss_limits",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({daily_loss_limit: 1500, weekly_loss_limit: '2900'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/loss_limits")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Put.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"daily_loss_limit\":1500,\"weekly_loss_limit\":\"2900\"}"

response = http.request(request)
puts response.read_body
```

`PUT /loss_limits`

This endpoint is used to set the loss limits for a player

> Body parameter

```json
{
  "daily_loss_limit": 1500,
  "weekly_loss_limit": "2900"
}
```

<h3 id="update-loss-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|daily_loss_limit|body|number|true|none|
|weekly_loss_limit|body|string|true|none|

> Example responses

> Returns the player

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "birthdate": "1985-03-08",
  "email": "janedoe@example.com",
  "phone_number": null,
  "bank_account_number": null,
  "suspended_until": null,
  "weekly_loss_limit": 2900,
  "daily_loss_limit": 1500,
  "language": "nn",
  "is_activated": true,
  "onboarding": false,
  "information": false,
  "activity": {
    "onboarding": true,
    "won_prize": true,
    "won_sc_ticket": true,
    "revealed_all": true,
    "weekly_result": false
  },
  "currency": "NOK",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="update-loss-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the player|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="update-loss-limit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» first_name|string|true|none|none|
|» last_name|string|true|none|none|
|» birthdate|string|true|none|none|
|» email|string|true|none|none|
|» phone_number|any|false|none|none|
|» bank_account_number|any|false|none|none|
|» suspended_until|any|false|none|none|
|» weekly_loss_limit|number|true|none|none|
|» daily_loss_limit|number|true|none|none|
|» language|string|true|none|none|
|» is_activated|boolean|true|none|none|
|» onboarding|boolean|true|none|none|
|» information|boolean|true|none|none|
|» activity|object|true|none|none|
|»» onboarding|boolean|true|none|none|
|»» won_prize|boolean|true|none|none|
|»» won_sc_ticket|boolean|true|none|none|
|»» revealed_all|boolean|true|none|none|
|»» weekly_result|boolean|true|none|none|
|» currency|string|true|none|none|
|» avatar|object|true|none|none|
|»» url|any|false|none|none|
|»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Profile

<a id="opIdUpdate Profile"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/profile");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/profile \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data ''
```

```http
PATCH /profile HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/profile");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/profile",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/profile")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/x-www-form-urlencoded'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`PATCH /profile`

This endpoint is used to update the players profile.

> Body parameter

```yaml
first_name: Jane
last_name: Doe

```

<h3 id="update-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstname|body|string|false|Jane|
|lastname|body|string|false|Doe|

> Example responses

> Returns the updated player profile.

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "birthdate": "1985-05-23",
  "email": "janedoe@example.com",
  "phone_number": "654 69 879",
  "bank_account_number": "11111111111111",
  "suspended_until": null,
  "suspended_by": null,
  "weekly_loss_limit": 3500,
  "daily_loss_limit": 1500,
  "language": "nn",
  "is_activated": true,
  "onboarding": false,
  "information": false,
  "activity": {
    "onboarding": false,
    "won_prize": false,
    "won_sc_ticket": false,
    "revealed_all": false,
    "weekly_result": false
  },
  "currency": "NOK",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  },
  "exclusion": {
    "service_enabled": false,
    "service_name": null,
    "state": "not_excluded"
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="update-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the updated player profile.|[player](#schemaplayer)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Profile

<a id="opIdGet Profile"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/profile");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/profile \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /profile HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/profile");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/profile",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/profile")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /profile`

This endpoint is use to return the entire player information.

> Example responses

> Returns the player Info

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "birthdate": "1935-05-23",
  "email": "playtest7@gmail.com",
  "phone_number": "123 123 1234",
  "bank_account_number": "111111111111",
  "suspended_until": null,
  "suspended_by": null,
  "weekly_loss_limit": 3500,
  "daily_loss_limit": 1500,
  "language": "nn",
  "is_activated": true,
  "onboarding": false,
  "information": false,
  "activity": {
    "onboarding": false,
    "won_prize": false,
    "won_sc_ticket": false,
    "revealed_all": false,
    "weekly_result": false
  },
  "currency": "NOK",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  },
  "exclusion": {
    "service_enabled": false,
    "service_name": null,
    "state": "not_excluded"
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the player Info|[player](#schemaplayer)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Self Exclusion

<a id="opIdSelf Exclusion"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/suspension");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"suspended_until\":\"2021-04-12T15:28:05.335Z\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/suspension \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"suspended_until":"2021-04-12T15:28:05.335Z"}'
```

```http
POST /suspension HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 46

{"suspended_until":"2021-04-12T15:28:05.335Z"}
```

```javascript
const data = JSON.stringify({
  "suspended_until": "2021-04-12T15:28:05.335Z"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/suspension");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/suspension",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({suspended_until: '2021-04-12T15:28:05.335Z'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/suspension")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"suspended_until\":\"2021-04-12T15:28:05.335Z\"}"

response = http.request(request)
puts response.read_body
```

`POST /suspension`

This endpoint is used to set the player suspension until a specific date.

> Body parameter

```json
{
  "suspended_until": "2021-04-12T15:28:05.335Z"
}
```

<h3 id="self-exclusion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suspended_until|body|string|true|none|

> Example responses

> Returns player details with suspended until parameter

```json
{
  "first_name": "string",
  "last_name": "string",
  "birthdate": "string",
  "email": "string",
  "phone_number": "string",
  "bank_account_number": "string",
  "suspended_until": null,
  "weekly_loss_limit": 0,
  "daily_loss_limit": 0,
  "language": "string",
  "is_activated": true,
  "onboarding": true,
  "information": true,
  "activity": {
    "won_sc_ticket": true,
    "won_prize": true,
    "onboarding": true,
    "revealed_all": true,
    "weekly_result": true
  },
  "currency": "string",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="self-exclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns player details with suspended until parameter|[player](#schemaplayer)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## External Self Exclusion

<a id="opIdExternal Self Exclusion"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/exclusion");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/exclusion \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /exclusion HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/exclusion");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/exclusion",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/exclusion")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /exclusion`

This endpoint is use to return the player external self exclusion details.

> Example responses

> Returns the player external self exclusion details

```json
{
  "service_enabled": true,
  "service_name": "string",
  "state": "string"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="external-self-exclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the player external self exclusion details|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="external-self-exclusion-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Player Drawings

<a id="opIdPlayer Drawings"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/player/drawings");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/player/drawings \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /player/drawings HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/player/drawings");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/player/drawings",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/player/drawings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /player/drawings`

This endpoint is use to retrieve the previous(one before the current) and current drawings.

> Example responses

> Returns last and current drawings

```json
[
  {
    "id": 2244,
    "name": "QA Test",
    "type": "predrawn",
    "headline": "Lottery for testing  purpose",
    "description": "Lottery for testing  purpose",
    "ends_at": "2021-04-11T12:38:00.000Z",
    "tickets_count": 1000,
    "ticket_price": "25.00",
    "currency": "NOK",
    "cover_url": null,
    "repeat_every": 604800,
    "prizes": [
      {
        "id": 4981,
        "name": "PrizeWeekly1",
        "description": "",
        "value": "50.00",
        "quantity": 100,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4980,
        "name": "PrizeWeely2",
        "description": "",
        "value": "40.00",
        "quantity": 80,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4979,
        "name": "PrizeWeekly3",
        "description": "",
        "value": "30.00",
        "quantity": 60,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4978,
        "name": "PrizeInstant1",
        "description": "",
        "value": "25.00",
        "quantity": 50,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4977,
        "name": "PrizeInstant2",
        "description": "",
        "value": "50.00",
        "quantity": 40,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4976,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4975,
        "name": "PrizeInstant4",
        "description": "",
        "value": "1000.00",
        "quantity": 8,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      }
    ]
  },
  {
    "id": 2245,
    "name": "QA Test",
    "type": "predrawn",
    "headline": "Lottery for testing  purpose",
    "description": "Lottery for testing  purpose",
    "ends_at": "2021-04-11T13:08:00.000Z",
    "tickets_count": 1000,
    "ticket_price": "25.00",
    "currency": "NOK",
    "cover_url": null,
    "repeat_every": 604800,
    "prizes": [
      {
        "id": 4988,
        "name": "PrizeWeekly1",
        "description": "",
        "value": "50.00",
        "quantity": 100,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4987,
        "name": "PrizeWeely2",
        "description": "",
        "value": "40.00",
        "quantity": 80,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4986,
        "name": "PrizeWeekly3",
        "description": "",
        "value": "30.00",
        "quantity": 60,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4985,
        "name": "PrizeInstant1",
        "description": "",
        "value": "25.00",
        "quantity": 50,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4984,
        "name": "PrizeInstant2",
        "description": "",
        "value": "50.00",
        "quantity": 40,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4983,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 4982,
        "name": "PrizeInstant4",
        "description": "",
        "value": "1000.00",
        "quantity": 8,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      }
    ]
  }
]
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="player-drawings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns last and current drawings|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="player-drawings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» name|string|true|none|none|
|» type|string|true|none|none|
|» headline|string|true|none|none|
|» description|string|true|none|none|
|» ends_at|string|true|none|none|
|» tickets_count|number|true|none|none|
|» ticket_price|string|true|none|none|
|» currency|string|true|none|none|
|» cover_url|any|false|none|none|
|» repeat_every|number|true|none|none|
|» prizes|[any]|true|none|none|
|»» id|number|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|
|»» value|string|true|none|none|
|»» quantity|number|true|none|none|
|»» reveal_type|string|true|none|none|
|»» image_url|any|false|none|none|
|»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Drawing Summary for Player

<a id="opIdGet Drawing Summary for Player"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/player/drawings/0");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/player/drawings/0 \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /player/drawings/0 HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/player/drawings/0");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/player/drawings/0",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/player/drawings/0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /player/drawings/{id}`

This endpoint is use to return the specific drawing summary.

<h3 id="get-drawing-summary-for-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Drawing ID|

> Example responses

> Returns drawing summary

```json
{
  "weekly_tickets_count": 1,
  "subscription_tickets_count": 2,
  "drawing_revenue": 0
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-drawing-summary-for-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns drawing summary|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="get-drawing-summary-for-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» weekly_tickets_count|number|true|none|none|
|» subscription_tickets_count|number|true|none|none|
|» drawing_revenue|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-subscription">Subscription</h1>

Automatic subscription to drawings

## Create Subscription

<a id="opIdCreate Subscription"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/subscription");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "text/plain");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"drawing_id\":2243,\"photo_id\":77,\"redirect_url\":\"https://snapchance-staging5.netlify.app/subscription/confirm\",\"tickets_count\":1}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/subscription \
  --header 'Accept: text/plain' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"drawing_id":2243,"photo_id":77,"redirect_url":"https://snapchance-staging5.netlify.app/subscription/confirm","tickets_count":1}'
```

```http
POST /subscription HTTP/1.1
Content-Type: application/json
Accept: text/plain
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 129

{"drawing_id":2243,"photo_id":77,"redirect_url":"https://snapchance-staging5.netlify.app/subscription/confirm","tickets_count":1}
```

```javascript
const data = JSON.stringify({
  "drawing_id": 2243,
  "photo_id": 77,
  "redirect_url": "https://snapchance-staging5.netlify.app/subscription/confirm",
  "tickets_count": 1
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/subscription");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "text/plain");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/subscription",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "text/plain",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  drawing_id: 2243,
  photo_id: 77,
  redirect_url: 'https://snapchance-staging5.netlify.app/subscription/confirm',
  tickets_count: 1
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/subscription")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'text/plain'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"drawing_id\":2243,\"photo_id\":77,\"redirect_url\":\"https://snapchance-staging5.netlify.app/subscription/confirm\",\"tickets_count\":1}"

response = http.request(request)
puts response.read_body
```

`POST /subscription`

This endpoint is used to activate the player subscription. Doing so will automatically create an entry with a designated photo and ticket count for every subsequent drawing.

> Body parameter

```json
{
  "drawing_id": 2243,
  "photo_id": 77,
  "redirect_url": "https://snapchance-staging5.netlify.app/subscription/confirm",
  "tickets_count": 1
}
```

<h3 id="create-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drawing_id|body|number|true|none|
|photo_id|body|number|true|none|
|redirect_url|body|string|true|none|
|tickets_count|body|number|true|none|

> Example responses

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="create-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns a subscription|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Subscription

<a id="opIdUpdate Subscription"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/subscription");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"deposit_id\":\"20847\",\"drawing_id\":2243}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/subscription \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"deposit_id":"20847","drawing_id":2243}'
```

```http
PATCH /subscription HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 40

{"deposit_id":"20847","drawing_id":2243}
```

```javascript
const data = JSON.stringify({
  "deposit_id": "20847",
  "drawing_id": 2243
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/subscription");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/subscription",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({deposit_id: '20847', drawing_id: 2243}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/subscription")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"deposit_id\":\"20847\",\"drawing_id\":2243}"

response = http.request(request)
puts response.read_body
```

`PATCH /subscription`

This endpoint is used to verify and activate a subscription.

> Body parameter

```json
{
  "deposit_id": "20847",
  "drawing_id": 2243
}
```

<h3 id="update-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deposit_id|body|string|true|none|
|drawing_id|body|number|true|none|

> Example responses

> Returns verified subscription details

```json
{
  "id": 37,
  "amount": "25.00",
  "tickets_count": 1,
  "photo_id": 77,
  "status": "active",
  "payment_method": "Visa",
  "card_last_digits": "0004",
  "card_expiration_date": "05/21",
  "redirect_url": null,
  "expires_on": "2022-04-11",
  "deposit": {
    "id": 20847,
    "status": "completed"
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="update-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns verified subscription details|[subscription](#schemasubscription)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Subscription

<a id="opIdGet Subscription"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/subscription");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/subscription \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /subscription HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/subscription");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/subscription",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/subscription")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /subscription`

This endpoint is used to retrieve the player subscription. This returns the active subscription for the player.

> Example responses

> Retrieving Subscription details

```json
{
  "id": 37,
  "amount": "25.00",
  "tickets_count": 1,
  "photo_id": 77,
  "status": "active",
  "payment_method": "Visa",
  "card_last_digits": "0004",
  "card_expiration_date": "05/21",
  "redirect_url": null,
  "expires_on": "2022-04-11",
  "deposit": {
    "id": 20847,
    "status": "completed"
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Retrieving Subscription details|[subscription](#schemasubscription)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel Subscription

<a id="opIdCancel Subscription"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/subscription/cancellation");
var request = new RestRequest(Method.POST);
request.AddHeader("Accept", "text/plain");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/subscription/cancellation \
  --header 'Accept: text/plain' \
  --header 'Authorization: Bearer {access-token}'
```

```http
POST /subscription/cancellation HTTP/1.1
Accept: text/plain
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/subscription/cancellation");
xhr.setRequestHeader("Accept", "text/plain");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/subscription/cancellation",
  "headers": {
    "Accept": "text/plain",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/subscription/cancellation")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Accept"] = 'text/plain'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`POST /subscription/cancellation`

This endpoint is used to cancel the Subscription.

> Example responses

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="cancel-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Cancels subscription|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Entries for Subscription

<a id="opIdList Entries for Subscription"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/subscription/entries");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/subscription/entries \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /subscription/entries HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/subscription/entries");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/subscription/entries",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/subscription/entries")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /subscription/entries`

This endpoint is use to returns a list of subscription entries.

> Example responses

> Returns a list of subscription entries

```json
[
  {
    "id": "8137",
    "tickets_count": 1,
    "created_at": "2021-04-11T12:08:43.646Z",
    "entry_type": "subscription",
    "is_revealed": false,
    "drawing": {
      "id": 2244,
      "name": "QA Test",
      "type": "predrawn",
      "headline": "Lottery for testing  purpose",
      "description": "",
      "ends_at": "2021-04-11T12:38:00.000Z",
      "tickets_count": 1000,
      "ticket_price": "25.00",
      "currency": "NOK",
      "cover_url": null,
      "repeat_every": 604800
    },
    "photo": {
      "id": "77",
      "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1599137523/cv0mtalx5eq6ctw5rxsx.jpg",
      "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1599137523/cv0mtalx5eq6ctw5rxsx.jpg",
      "is_default": true,
      "is_played": "true",
      "is_visible": true
    },
    "payment": {
      "type": "payment",
      "amount": "-25.00",
      "created_at": "2021-04-11T12:08:43.789Z",
      "status": "completed",
      "balance": "0.00",
      "currency": "NOK"
    },
    "tickets": [
      {
        "id": "4958310",
        "serial_number": "866635B1-B221-4603-BA03-3B364D717401",
        "is_revealed": false,
        "is_scratched": false,
        "scratch_state": [
          [
            {
              "prize": "50",
              "revealed": false
            },
            {
              "prize": "50",
              "revealed": false
            },
            {
              "prize": "250",
              "revealed": false
            }
          ],
          [
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "250",
              "revealed": false
            }
          ],
          [
            {
              "prize": "25",
              "revealed": false
            },
            {
              "prize": "25",
              "revealed": false
            },
            {
              "prize": "25",
              "revealed": false
            }
          ]
        ]
      }
    ]
  }
]
```

<h3 id="list-entries-for-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a list of subscription entries|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-entries-for-subscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» tickets_count|number|true|none|none|
|» created_at|string|true|none|none|
|» entry_type|any|false|none|none|
|» is_revealed|boolean|true|none|none|
|» photo|object|true|none|none|
|»» id|string|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|string|true|none|none|
|»» is_visible|boolean|true|none|none|
|» payment|object|true|none|none|
|»» type|string|true|none|none|
|»» amount|string|true|none|none|
|»» created_at|string|true|none|none|
|»» status|string|true|none|none|
|» tickets|[any]|true|none|none|
|»» id|string|true|none|none|
|»» serial_number|string|true|none|none|
|»» is_revealed|boolean|true|none|none|
|»» prize|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-wallet">Wallet</h1>

Wallet management and transaction reporting

## Deposit

<a id="opIdDeposit"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/wallet/deposits");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"amount\":20,\"redirect_url\":\"https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/wallet/deposits \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"amount":20,"redirect_url":"https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"}'
```

```http
POST /wallet/deposits HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 110

{"amount":20,"redirect_url":"https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"}
```

```javascript
const data = JSON.stringify({
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/wallet/deposits");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/wallet/deposits",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  amount: 20,
  redirect_url: 'https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds'
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/wallet/deposits")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"amount\":20,\"redirect_url\":\"https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds\"}"

response = http.request(request)
puts response.read_body
```

`POST /wallet/deposits`

This endpoint is used to deposit funds into the Players wallet.  See [Wallet Funding Flow](#wallet-funding) for more info.

> Body parameter

```json
{
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"
}
```

<h3 id="deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|body|number|true|none|
|redirect_url|body|string|true|The application URL that NETS will redirect back to|

> Example responses

> Added funds to wallet

```json
{
  "id": "11611",
  "amount": 50,
  "status": "pending",
  "redirect_url": "https://test.epayment.nets.eu/Terminal/default.aspx?merchantId=12003105&transactionId=abd9b5de99c546e28c2cdd1aef19a7d8"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

> Not Found

```json
{
  "errors": "Access denied."
}
```

<h3 id="deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Added funds to wallet|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="deposit-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» amount|number|true|none|none|
|» status|string|true|none|none|
|» redirect_url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify Deposit

<a id="opIdVerify Deposit"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/wallet/deposits/0");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/wallet/deposits/0 \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
PATCH /wallet/deposits/0 HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/wallet/deposits/0");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/wallet/deposits/0",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/wallet/deposits/0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`PATCH /wallet/deposits/{id}`

This endpoint is used to verify the deposits added to the player wallet. See [Wallet Funding Flow](#wallet-funding) for more info.

<h3 id="verify-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Deposit ID|

> Example responses

> Returns the added deposit.

```json
{
  "id": "13491",
  "amount": 20,
  "status": "completed",
  "redirect_url": "null"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="verify-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns the added deposit.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="verify-deposit-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» amount|number|true|none|none|
|» status|string|true|none|none|
|» redirect_url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Withdraw From Wallet

<a id="opIdWithdraw From Wallet"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/wallet/withdrawals");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"amount\":50}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/wallet/withdrawals \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"amount":50}'
```

```http
POST /wallet/withdrawals HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 13

{"amount":50}
```

```javascript
const data = JSON.stringify({
  "amount": 50
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/wallet/withdrawals");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/wallet/withdrawals",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({amount: 50}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/wallet/withdrawals")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"amount\":50}"

response = http.request(request)
puts response.read_body
```

`POST /wallet/withdrawals`

This endpoint is used to withdraw a specified amount from the players wallet balance to the players bank account. See [Payout Flow](#payout) for more info.

> Body parameter

```json
{
  "amount": 50
}
```

<h3 id="withdraw-from-wallet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|body|number|true|none|

> Example responses

> Wallet withdrawl Amount

```json
{
  "amount": "50.00",
  "created_at": "2021-04-10T21:51:31.607Z"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="withdraw-from-wallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Wallet withdrawl Amount|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden:when we dont have permission to withdraw|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="withdraw-from-wallet-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» amount|string|true|none|none|
|» created_at|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Wallet Balance

<a id="opIdGet Wallet Balance"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/wallet/balance");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/wallet/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /wallet/balance HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/wallet/balance");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/wallet/balance",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/wallet/balance")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /wallet/balance`

This endpoint returns the current balance for the player.

> Example responses

> Returns the wallet balance

```json
{
  "balance": "2005.00",
  "currency": "NOK"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-wallet-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the wallet balance|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="get-wallet-balance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» balance|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Wallet Transactions

<a id="opIdGet Wallet Transactions"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/wallet/transactions");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/wallet/transactions \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /wallet/transactions HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/wallet/transactions");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/wallet/transactions",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/wallet/transactions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /wallet/transactions`

This endpoint returns all the transaction details of the player including withdrawals, deposits, awards and payments.

> Example responses

> Returns wallet transactions

```json
{
  "transactions": [
    {
      "type": "payment",
      "amount": "-25.00",
      "created_at": "2021-04-10T20:55:18.865Z",
      "status": "completed",
      "balance": "2005.00",
      "currency": "NOK",
      "entry": {
        "id": 7972,
        "tickets_count": 1,
        "created_at": "2021-04-10T20:55:18.788Z",
        "entry_type": null,
        "is_revealed": true,
        "drawing": {
          "id": 2213,
          "name": "QA Test",
          "type": "predrawn",
          "headline": "Lottery for testing  purpose",
          "description": "",
          "ends_at": "2021-04-10T21:08:00.000Z",
          "tickets_count": 1000,
          "ticket_price": "25.00",
          "currency": "NOK",
          "cover_url": null,
          "repeat_every": 604800,
          "prizes": [
            {
              "id": 4764,
              "name": "PrizeWeekly1",
              "description": "",
              "value": "50.00",
              "quantity": 100,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4763,
              "name": "PrizeWeely2",
              "description": "",
              "value": "40.00",
              "quantity": 80,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4762,
              "name": "PrizeWeekly3",
              "description": "",
              "value": "30.00",
              "quantity": 60,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4761,
              "name": "PrizeInstant1",
              "description": "",
              "value": "25.00",
              "quantity": 50,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4760,
              "name": "PrizeInstant2",
              "description": "",
              "value": "50.00",
              "quantity": 40,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4759,
              "name": "PrizeInstant3",
              "description": "",
              "value": "250.00",
              "quantity": 15,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4758,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          ]
        },
        "photo": {
          "id": 2614,
          "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618088118/s5g6tmpu9n58w1fyvdpv.jpg",
          "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618088118/s5g6tmpu9n58w1fyvdpv.jpg",
          "is_default": false,
          "is_played": true,
          "is_visible": true
        },
        "tickets": [
          {
            "id": 4927331,
            "serial_number": "B45AE29F-16F5-478E-8E29-4AC91BAE36B7",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "40",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                },
                {
                  "prize": "40",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "250",
                  "revealed": false
                },
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "40",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          }
        ]
      }
    },
    {
      "type": "payment",
      "amount": "-25.00",
      "created_at": "2021-04-10T20:17:52.373Z",
      "status": "completed",
      "balance": "2030.00",
      "currency": "NOK",
      "entry": {
        "id": 7962,
        "tickets_count": 1,
        "created_at": "2021-04-10T20:17:52.271Z",
        "entry_type": null,
        "is_revealed": true,
        "drawing": {
          "id": 2212,
          "name": "QA Test",
          "type": "predrawn",
          "headline": "Lottery for testing  purpose",
          "description": "",
          "ends_at": "2021-04-10T20:38:00.000Z",
          "tickets_count": 1000,
          "ticket_price": "25.00",
          "currency": "NOK",
          "cover_url": null,
          "repeat_every": 604800,
          "prizes": [
            {
              "id": 4757,
              "name": "PrizeWeekly1",
              "description": "",
              "value": "50.00",
              "quantity": 100,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4756,
              "name": "PrizeWeely2",
              "description": "",
              "value": "40.00",
              "quantity": 80,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4755,
              "name": "PrizeWeekly3",
              "description": "",
              "value": "30.00",
              "quantity": 60,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4754,
              "name": "PrizeInstant1",
              "description": "",
              "value": "25.00",
              "quantity": 50,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4753,
              "name": "PrizeInstant2",
              "description": "",
              "value": "50.00",
              "quantity": 40,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4752,
              "name": "PrizeInstant3",
              "description": "",
              "value": "250.00",
              "quantity": 15,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4751,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          ]
        },
        "photo": {
          "id": 2613,
          "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
          "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
          "is_default": false,
          "is_played": true,
          "is_visible": true
        },
        "tickets": [
          {
            "id": 4926332,
            "serial_number": "3C9DCDD4-EAC7-4457-9F77-A723CB3CDDA8",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          }
        ]
      }
    },
    {
      "type": "payment",
      "amount": "-25.00",
      "created_at": "2021-04-10T20:13:03.067Z",
      "status": "completed",
      "balance": "2055.00",
      "currency": "NOK",
      "entry": {
        "id": 7961,
        "tickets_count": 1,
        "created_at": "2021-04-10T20:13:02.946Z",
        "entry_type": null,
        "is_revealed": true,
        "drawing": {
          "id": 2212,
          "name": "QA Test",
          "type": "predrawn",
          "headline": "Lottery for testing  purpose",
          "description": "",
          "ends_at": "2021-04-10T20:38:00.000Z",
          "tickets_count": 1000,
          "ticket_price": "25.00",
          "currency": "NOK",
          "cover_url": null,
          "repeat_every": 604800,
          "prizes": [
            {
              "id": 4757,
              "name": "PrizeWeekly1",
              "description": "",
              "value": "50.00",
              "quantity": 100,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4756,
              "name": "PrizeWeely2",
              "description": "",
              "value": "40.00",
              "quantity": 80,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4755,
              "name": "PrizeWeekly3",
              "description": "",
              "value": "30.00",
              "quantity": 60,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4754,
              "name": "PrizeInstant1",
              "description": "",
              "value": "25.00",
              "quantity": 50,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4753,
              "name": "PrizeInstant2",
              "description": "",
              "value": "50.00",
              "quantity": 40,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4752,
              "name": "PrizeInstant3",
              "description": "",
              "value": "250.00",
              "quantity": 15,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4751,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          ]
        },
        "photo": {
          "id": 2612,
          "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618085581/egnanrjklf5rbrmudrgr.jpg",
          "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618085581/egnanrjklf5rbrmudrgr.jpg",
          "is_default": false,
          "is_played": true,
          "is_visible": true
        },
        "tickets": [
          {
            "id": 4926331,
            "serial_number": "ACF8F90C-B2BA-4CBE-9CC9-D45BC122AD28",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "50",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          }
        ]
      }
    },
    {
      "type": "award",
      "amount": "30.00",
      "created_at": "2021-04-09T22:09:06.618Z",
      "status": "completed",
      "balance": "2080.00",
      "currency": "NOK",
      "entry": {
        "id": 6573,
        "tickets_count": 1,
        "created_at": "2021-04-08T12:52:09.670Z",
        "entry_type": null,
        "is_revealed": true,
        "drawing": {
          "id": 2101,
          "name": "QA Test",
          "type": "predrawn",
          "headline": "Lottery for testing  purpose",
          "description": "",
          "ends_at": "2021-04-08T13:08:00.000Z",
          "tickets_count": 1000,
          "ticket_price": "25.00",
          "currency": "NOK",
          "cover_url": null,
          "repeat_every": 604800,
          "prizes": [
            {
              "id": 3980,
              "name": "PrizeWeekly1",
              "description": "",
              "value": "50.00",
              "quantity": 100,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3979,
              "name": "PrizeWeely2",
              "description": "",
              "value": "40.00",
              "quantity": 80,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3978,
              "name": "PrizeWeekly3",
              "description": "",
              "value": "30.00",
              "quantity": 60,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3977,
              "name": "PrizeInstant1",
              "description": "",
              "value": "25.00",
              "quantity": 50,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3976,
              "name": "PrizeInstant2",
              "description": "",
              "value": "50.00",
              "quantity": 40,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3975,
              "name": "PrizeInstant3",
              "description": "",
              "value": "250.00",
              "quantity": 15,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 3974,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          ]
        },
        "photo": {
          "id": 2315,
          "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1617886328/ilqmc1qtmveenjvucnrn.jpg",
          "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1617886328/ilqmc1qtmveenjvucnrn.jpg",
          "is_default": false,
          "is_played": true,
          "is_visible": true
        },
        "tickets": [
          {
            "id": 4815330,
            "serial_number": "11FAE4C5-8A59-4288-A3BD-C8C6BA663324",
            "is_revealed": true,
            "is_scratched": true,
            "scratch_state": [
              [
                {
                  "prize": "1000",
                  "revealed": true
                },
                {
                  "prize": "1000",
                  "revealed": true
                },
                {
                  "prize": "1000",
                  "revealed": true
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": true
                },
                {
                  "prize": "25",
                  "revealed": true
                },
                {
                  "prize": "250",
                  "revealed": true
                }
              ],
              [
                {
                  "prize": "25",
                  "revealed": true
                },
                {
                  "prize": "250",
                  "revealed": true
                },
                {
                  "prize": "50",
                  "revealed": true
                }
              ]
            ],
            "prize": {
              "id": 3974,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          }
        ]
      }
    },
    {
      "type": "payment",
      "amount": "-75.00",
      "created_at": "2021-04-09T21:38:43.971Z",
      "status": "completed",
      "balance": "1950.00",
      "currency": "NOK",
      "entry": {
        "id": 7464,
        "tickets_count": 3,
        "created_at": "2021-04-09T21:38:43.907Z",
        "entry_type": null,
        "is_revealed": true,
        "drawing": {
          "id": 2167,
          "name": "QA Test",
          "type": "predrawn",
          "headline": "Lottery for testing  purpose",
          "description": "",
          "ends_at": "2021-04-09T22:08:00.000Z",
          "tickets_count": 1000,
          "ticket_price": "25.00",
          "currency": "NOK",
          "cover_url": null,
          "repeat_every": 604800,
          "prizes": [
            {
              "id": 4442,
              "name": "PrizeWeekly1",
              "description": "",
              "value": "50.00",
              "quantity": 100,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4441,
              "name": "PrizeWeely2",
              "description": "",
              "value": "40.00",
              "quantity": 80,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4440,
              "name": "PrizeWeekly3",
              "description": "",
              "value": "30.00",
              "quantity": 60,
              "reveal_type": "drawing_end",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4439,
              "name": "PrizeInstant1",
              "description": "",
              "value": "25.00",
              "quantity": 50,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4438,
              "name": "PrizeInstant2",
              "description": "",
              "value": "50.00",
              "quantity": 40,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4437,
              "name": "PrizeInstant3",
              "description": "",
              "value": "250.00",
              "quantity": 15,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            },
            {
              "id": 4436,
              "name": "PrizeInstant4",
              "description": "",
              "value": "1000.00",
              "quantity": 8,
              "reveal_type": "instant",
              "image_url": null,
              "thumbnail_url": null
            }
          ]
        },
        "photo": {
          "id": 2572,
          "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618004321/pilbu2nmrmxgyeb1ra2d.jpg",
          "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618004321/pilbu2nmrmxgyeb1ra2d.jpg",
          "is_default": false,
          "is_played": true,
          "is_visible": true
        },
        "tickets": [
          {
            "id": 4881331,
            "serial_number": "20253E4D-643F-41E6-B074-DE10DCE4ED11",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "250",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "50",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          },
          {
            "id": 4881330,
            "serial_number": "4CB8DFA0-2198-49E0-B73B-1ED3E169ED42",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "50",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "50",
                  "revealed": false
                },
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "25",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          },
          {
            "id": 4881329,
            "serial_number": "C5AF30E1-EEDC-4A27-AF19-0A979AD8E8FB",
            "is_revealed": false,
            "is_scratched": false,
            "scratch_state": [
              [
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "1000",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                }
              ],
              [
                {
                  "prize": "25",
                  "revealed": false
                },
                {
                  "prize": "SnapChanceTicket",
                  "revealed": false
                },
                {
                  "prize": "250",
                  "revealed": false
                }
              ]
            ],
            "prize": null
          }
        ]
      }
    },
    {
      "type": "deposit",
      "amount": "500.00",
      "created_at": "2021-04-09T13:13:14.406Z",
      "status": "completed",
      "balance": "2025.00",
      "currency": "NOK",
      "entry": null
    },
    {
      "type": "deposit",
      "amount": "1000.00",
      "created_at": "2021-04-08T12:51:44.141Z",
      "status": "completed",
      "balance": "1000.00",
      "currency": "NOK",
      "entry": null
    }
  ],
  "meta": {
    "total_pages": 1
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-wallet-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns wallet transactions|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="get-wallet-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» transactions|[object]|true|none|none|
|»» type|string|true|none|none|
|»» amount|string|true|none|none|
|»» created_at|string|true|none|none|
|»» status|string|true|none|none|
|»» entry|any|false|none|none|
|» meta|object|true|none|none|
|»» total_pages|number|true|none|none|
|»» *anonymous*|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-entries">Entries</h1>

Entries consist of a photo and 1 to n tickets

## Purchase Entries

<a id="opIdPurchase Entries"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/drawings/0/entries");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"claim_code\":\"string\",\"entries\":[{\"photo_id\":0,\"tickets_count\":0}]}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/drawings/0/entries \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"claim_code":"string","entries":[{"photo_id":0,"tickets_count":0}]}'
```

```http
POST /drawings/0/entries HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 68

{"claim_code":"string","entries":[{"photo_id":0,"tickets_count":0}]}
```

```javascript
const data = JSON.stringify({
  "claim_code": "string",
  "entries": [
    {
      "photo_id": 0,
      "tickets_count": 0
    }
  ]
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/drawings/0/entries");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/drawings/0/entries",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({claim_code: 'string', entries: [{photo_id: 0, tickets_count: 0}]}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/drawings/0/entries")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"claim_code\":\"string\",\"entries\":[{\"photo_id\":0,\"tickets_count\":0}]}"

response = http.request(request)
puts response.read_body
```

`POST /drawings/{id}/entries`

This endpoint is used to buy entries.  An entry consists of a single photo and multiple tickets. Tickets can be scratched for an instant win or be "revealed" at the end of the drawing. Please see the [Ticket Purcahse Flow](#ticket-purchase) for more info.

> Body parameter

```json
{
  "claim_code": "string",
  "entries": [
    {
      "photo_id": 0,
      "tickets_count": 0
    }
  ]
}
```

<h3 id="purchase-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Drawing ID|
|claim_code|body|string|false|none|
|entries|body|[any]|true|none|
|» photo_id|body|number|true|none|
|» tickets_count|body|number|true|none|

> Example responses

> Returns a collection of brought tickets Info

```json
{
  "id": 7962,
  "tickets_count": 1,
  "created_at": "2021-04-10T20:17:52.271Z",
  "entry_type": null,
  "is_revealed": true,
  "photo": {
    "id": 2613,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
    "is_default": false,
    "is_played": true,
    "is_visible": true
  },
  "payment": {
    "type": "payment",
    "amount": "-25.00",
    "created_at": "2021-04-10T20:17:52.373Z",
    "status": "completed",
    "balance": "2030.00",
    "currency": "NOK"
  },
  "tickets": [
    {
      "id": 4926332,
      "serial_number": "3C9DCDD4-EAC7-4457-9F77-A723CB3CDDA8",
      "is_revealed": false,
      "is_scratched": false,
      "scratch_state": [
        [
          {
            "prize": "1000",
            "revealed": false
          },
          {
            "prize": "25",
            "revealed": false
          },
          {
            "prize": "SnapChanceTicket",
            "revealed": false
          }
        ],
        [
          {
            "prize": "50",
            "revealed": false
          },
          {
            "prize": "SnapChanceTicket",
            "revealed": false
          },
          {
            "prize": "250",
            "revealed": false
          }
        ],
        [
          {
            "prize": "50",
            "revealed": false
          },
          {
            "prize": "1000",
            "revealed": false
          },
          {
            "prize": "SnapChanceTicket",
            "revealed": false
          }
        ]
      ],
      "prize": null
    }
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="purchase-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns a collection of brought tickets Info|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|

<h3 id="purchase-entries-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» tickets_count|number|true|none|none|
|» created_at|string|true|none|none|
|» entry_type|any|false|none|none|
|» is_revealed|boolean|true|none|none|
|» photo|[photo](#schemaphoto)|true|none|A photo that has been uploaded to be used as an "entry" in a drawing|
|»» id|number|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|boolean|true|none|none|
|»» is_visible|boolean|true|none|none|
|» payment|object|true|none|none|
|»» type|string|true|none|none|
|»» amount|string|true|none|none|
|»» created_at|string|true|none|none|
|»» status|string|true|none|none|
|»» balance|string|true|none|none|
|»» currency|string|true|none|none|
|» tickets|[any]|true|none|none|
|»» id|number|true|none|none|
|»» serial_number|string|true|none|none|
|»» is_revealed|boolean|true|none|none|
|»» is_scratched|boolean|true|none|none|
|»» scratch_state|[any]|false|none|none|
|»»» 0|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 1|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 2|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»» prize|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reveal Drawing Ticket

<a id="opIdReveal Drawing Ticket"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/tickets/0/reveal");
var request = new RestRequest(Method.POST);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/tickets/0/reveal \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
POST /tickets/0/reveal HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/tickets/0/reveal");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/tickets/0/reveal",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/tickets/0/reveal")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`POST /tickets/{id}/reveal`

This endpoint is use to reveal a SnapChance ticket at the end of a drawing.

<h3 id="reveal-drawing-ticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Entry ID|

> Example responses

> Drawing Ticket Revealed

```json
{
  "id": "4962317",
  "tickets_count": 2,
  "created_at": "10-10-2020",
  "serial_number": "C6321C19-8746-4514-8CC3-1E009CA51A5C",
  "is_revealed": true,
  "is_scratched": true,
  "scratch_state": [
    [
      {
        "revealed": true,
        "prize": "SnapChanceTicket"
      },
      {
        "revealed": true,
        "prize": "250"
      },
      {
        "revealed": true,
        "prize": "50"
      }
    ],
    [
      {
        "revealed": true,
        "prize": "SnapChanceTicket"
      },
      {
        "revealed": true,
        "prize": "1000"
      },
      {
        "revealed": true,
        "prize": "1000"
      }
    ],
    [
      {
        "revealed": true,
        "prize": "SnapChanceTicket"
      },
      {
        "revealed": true,
        "prize": "250"
      },
      {
        "revealed": true,
        "prize": "25"
      }
    ]
  ],
  "photo": {
    "id": "2617",
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618150434/n0gql9myeo2blyx2tmqj.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618150434/n0gql9myeo2blyx2tmqj.jpg",
    "is_default": false,
    "is_played": "true",
    "is_visible": true
  },
  "prize": null
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

> Forbidden

```json
{
  "errors": [
    "Entrance already revealed"
  ]
}
```

<h3 id="reveal-drawing-ticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Drawing Ticket Revealed|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="reveal-drawing-ticket-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» tickets_count|number|true|none|none|
|» created_at|string|true|none|none|
|» entry_type|any|false|none|none|
|» is_revealed|boolean|true|none|none|
|» photo|object|true|none|none|
|»» id|string|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|string|true|none|none|
|»» is_visible|boolean|true|none|none|
|» payment|object|false|none|none|
|»» type|string|false|none|none|
|»» amount|string|false|none|none|
|»» created_at|string|false|none|none|
|»» status|string|false|none|none|
|» tickets|[object]|false|none|none|
|»» id|string|true|none|none|
|»» serial_number|string|true|none|none|
|»» is_revealed|boolean|true|none|none|
|»» prize|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Entries for Player

<a id="opIdList Entries for Player"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/entries");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/entries \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /entries HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/entries");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/entries",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/entries")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /entries`

This endpoint is used to return the list of player Entries

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": 0,
      "tickets_count": 0,
      "created_at": "string",
      "entry_type": null,
      "is_revealed": true,
      "drawing": {
        "id": 0,
        "name": "string",
        "type": "string",
        "headline": "string",
        "description": "string",
        "ends_at": "string",
        "tickets_count": 0,
        "ticket_price": "string",
        "currency": "string",
        "repeat_every": 0,
        "cover_url": null,
        "prizes": [
          {
            "id": 0,
            "name": "string",
            "description": "string",
            "value": "string",
            "quantity": 0,
            "reveal_type": "string",
            "image_url": null,
            "thumbnail_url": null
          }
        ]
      },
      "photo": {
        "id": 0,
        "url": "string",
        "thumbnail_url": "string",
        "is_default": true,
        "is_played": true,
        "is_visible": true
      },
      "payment": {
        "type": "string",
        "amount": "string",
        "created_at": "string",
        "status": "string"
      },
      "tickets": [
        {
          "id": 0,
          "serial_number": "string",
          "is_revealed": true,
          "is_scratched": true,
          "scratch_state": [
            {
              "0": [
                {
                  "prize": "string",
                  "revealed": true
                }
              ],
              "1": [
                {
                  "prize": "string",
                  "revealed": true
                }
              ],
              "2": [
                {
                  "prize": "string",
                  "revealed": true
                }
              ]
            }
          ],
          "prize": null
        }
      ]
    }
  ],
  "meta": {
    "total_pages": 0
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="list-entries-for-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a list of entries|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-entries-for-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» entries|[any]|true|none|none|
|»» id|number|true|none|none|
|»» tickets_count|number|true|none|none|
|»» created_at|string|true|none|none|
|»» entry_type|any|false|none|none|
|»» is_revealed|boolean|true|none|none|
|»» drawing|object|false|none|none|
|»»» id|number|true|none|none|
|»»» name|string|true|none|none|
|»»» type|string|true|none|none|
|»»» headline|string|true|none|none|
|»»» description|string|true|none|none|
|»»» ends_at|string|true|none|none|
|»»» tickets_count|number|true|none|none|
|»»» ticket_price|string|true|none|none|
|»»» currency|string|true|none|none|
|»»» repeat_every|number|true|none|none|
|»»» cover_url|any|false|none|none|
|»»» prizes|[any]|true|none|none|
|»»»» id|number|true|none|none|
|»»»» name|string|true|none|none|
|»»»» description|string|true|none|none|
|»»»» value|string|true|none|none|
|»»»» quantity|number|true|none|none|
|»»»» reveal_type|string|true|none|none|
|»»»» image_url|any|false|none|none|
|»»»» thumbnail_url|any|false|none|none|
|»» photo|object|false|none|none|
|»»» id|number|true|none|none|
|»»» url|string|true|none|none|
|»»» thumbnail_url|string|true|none|none|
|»»» is_default|boolean|true|none|none|
|»»» is_played|boolean|true|none|none|
|»»» is_visible|boolean|true|none|none|
|»» payment|object|false|none|none|
|»»» type|string|true|none|none|
|»»» amount|string|true|none|none|
|»»» created_at|string|true|none|none|
|»»» status|string|true|none|none|
|»» tickets|[any]|false|none|none|
|»»» id|number|true|none|none|
|»»» serial_number|string|true|none|none|
|»»» is_revealed|boolean|true|none|none|
|»»» is_scratched|boolean|true|none|none|
|»»» scratch_state|[any]|false|none|none|
|»»»» 0|[any]|false|none|none|
|»»»»» prize|string|true|none|none|
|»»»»» revealed|boolean|true|none|none|
|»»»» 1|[any]|false|none|none|
|»»»»» prize|string|true|none|none|
|»»»»» revealed|boolean|true|none|none|
|»»»» 2|[any]|false|none|none|
|»»»»» prize|string|true|none|none|
|»»»»» revealed|boolean|true|none|none|
|»»» prize|any|false|none|none|
|» meta|object|true|none|none|
|»» total_pages|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Entry

<a id="opIdGet Entry"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/entries/0");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/entries/0 \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /entries/0 HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/entries/0");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/entries/0",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/entries/0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /entries/{id}`

This endpoint is used to return the details of a specified Entry.

<h3 id="get-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Entry ID|

> Example responses

> Returns entry details

```json
{
  "id": 8157,
  "tickets_count": 1,
  "created_at": "2021-04-11T14:19:30.100Z",
  "entry_type": null,
  "is_revealed": true,
  "drawing": {
    "id": 2248,
    "name": "QA Test",
    "type": "predrawn",
    "headline": "Lottery for testing  purpose",
    "description": "Lottery for testing  purpose",
    "ends_at": "2021-04-11T14:38:00.000Z",
    "tickets_count": 1000,
    "ticket_price": "25.00",
    "currency": "NOK",
    "cover_url": null,
    "repeat_every": 604800,
    "prizes": [
      {
        "id": 5009,
        "name": "PrizeWeekly1",
        "description": "",
        "value": "50.00",
        "quantity": 100,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5008,
        "name": "PrizeWeely2",
        "description": "",
        "value": "40.00",
        "quantity": 80,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5007,
        "name": "PrizeWeekly3",
        "description": "",
        "value": "30.00",
        "quantity": 60,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5006,
        "name": "PrizeInstant1",
        "description": "",
        "value": "25.00",
        "quantity": 50,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5005,
        "name": "PrizeInstant2",
        "description": "",
        "value": "50.00",
        "quantity": 40,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5004,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 5003,
        "name": "PrizeInstant4",
        "description": "",
        "value": "1000.00",
        "quantity": 8,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      }
    ]
  },
  "photo": {
    "id": 1168,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
    "is_default": false,
    "is_played": true,
    "is_visible": true
  },
  "payment": {
    "type": "payment",
    "amount": "-25.00",
    "created_at": "2021-04-11T14:19:30.292Z",
    "status": "completed",
    "balance": "8950.00",
    "currency": "NOK"
  },
  "tickets": [
    {
      "id": 4962318,
      "serial_number": "C8273DD2-5A6A-45C1-8D9C-B5D060C2EB04",
      "is_revealed": true,
      "is_scratched": false,
      "scratch_state": [
        [
          {
            "prize": "1000",
            "revealed": false
          },
          {
            "prize": "50",
            "revealed": false
          },
          {
            "prize": "250",
            "revealed": false
          }
        ],
        [
          {
            "prize": "25",
            "revealed": false
          },
          {
            "prize": "25",
            "revealed": false
          },
          {
            "prize": "50",
            "revealed": false
          }
        ],
        [
          {
            "prize": "250",
            "revealed": false
          },
          {
            "prize": "1000",
            "revealed": false
          },
          {
            "prize": "250",
            "revealed": false
          }
        ]
      ],
      "prize": {
        "id": 5004,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      }
    }
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="get-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns entry details|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="get-entry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» tickets_count|number|true|none|none|
|» created_at|string|true|none|none|
|» entry_type|any|false|none|none|
|» is_revealed|boolean|true|none|none|
|» drawing|object|true|none|none|
|»» id|number|true|none|none|
|»» name|string|true|none|none|
|»» type|string|true|none|none|
|»» headline|string|true|none|none|
|»» description|string|true|none|none|
|»» ends_at|string|true|none|none|
|»» tickets_count|number|true|none|none|
|»» ticket_price|string|true|none|none|
|»» currency|string|true|none|none|
|»» repeat_every|number|true|none|none|
|»» cover_url|any|false|none|none|
|»» prizes|[any]|true|none|none|
|»»» id|number|true|none|none|
|»»» name|string|true|none|none|
|»»» description|string|true|none|none|
|»»» value|string|true|none|none|
|»»» quantity|number|true|none|none|
|»»» reveal_type|string|true|none|none|
|»»» image_url|any|false|none|none|
|»»» thumbnail_url|any|false|none|none|
|» photo|object|true|none|none|
|»» id|number|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|boolean|true|none|none|
|»» is_visible|boolean|true|none|none|
|» payment|object|true|none|none|
|»» type|string|true|none|none|
|»» amount|string|true|none|none|
|»» created_at|string|true|none|none|
|»» status|string|true|none|none|
|» tickets|[any]|true|none|none|
|»» id|number|true|none|none|
|»» serial_number|string|true|none|none|
|»» is_revealed|boolean|true|none|none|
|»» is_scratched|boolean|true|none|none|
|»» scratch_state|[any]|false|none|none|
|»»» 0|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 1|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 2|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»» prize|object|false|none|none|
|»»» id|number|true|none|none|
|»»» name|string|true|none|none|
|»»» description|string|true|none|none|
|»»» value|string|true|none|none|
|»»» quantity|number|true|none|none|
|»»» reveal_type|string|true|none|none|
|»»» image_url|any|false|none|none|
|»»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Ticket State

<a id="opIdUpdate Ticket State"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/entries/string/tickets/string");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"scratch_state\":[[{\"revealed\":true},{\"revealed\":false},{\"revealed\":false}],[{\"revealed\":false},{\"revealed\":false},{\"revealed\":false}],[{\"revealed\":false},{\"revealed\":false},{\"revealed\":false}]]}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/entries/string/tickets/string \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"scratch_state":[[{"revealed":true},{"revealed":false},{"revealed":false}],[{"revealed":false},{"revealed":false},{"revealed":false}],[{"revealed":false},{"revealed":false},{"revealed":false}]]}'
```

```http
PATCH /entries/string/tickets/string HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 195

{"scratch_state":[[{"revealed":true},{"revealed":false},{"revealed":false}],[{"revealed":false},{"revealed":false},{"revealed":false}],[{"revealed":false},{"revealed":false},{"revealed":false}]]}
```

```javascript
const data = JSON.stringify({
  "scratch_state": [
    [
      {
        "revealed": true
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ],
    [
      {
        "revealed": false
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ],
    [
      {
        "revealed": false
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ]
  ]
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/entries/string/tickets/string");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/entries/string/tickets/string",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  scratch_state: [
    [{revealed: true}, {revealed: false}, {revealed: false}],
    [{revealed: false}, {revealed: false}, {revealed: false}],
    [{revealed: false}, {revealed: false}, {revealed: false}]
  ]
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/entries/string/tickets/string")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"scratch_state\":[[{\"revealed\":true},{\"revealed\":false},{\"revealed\":false}],[{\"revealed\":false},{\"revealed\":false},{\"revealed\":false}],[{\"revealed\":false},{\"revealed\":false},{\"revealed\":false}]]}"

response = http.request(request)
puts response.read_body
```

`PATCH /entries/{id}/tickets/{ticket_id}`

*Update Ticket State*

This end point is used to reveal each tile of ticket.

> Body parameter

```json
{
  "scratch_state": [
    [
      {
        "revealed": true
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ],
    [
      {
        "revealed": false
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ],
    [
      {
        "revealed": false
      },
      {
        "revealed": false
      },
      {
        "revealed": false
      }
    ]
  ]
}
```

<h3 id="update-ticket-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scratch_state|body|[any]|true|none|
|» 0|body|[any]|false|none|
|»» revealed|body|boolean|true|none|
|» 1|body|[any]|false|none|
|»» revealed|body|boolean|true|none|
|» 2|body|[any]|false|none|
|»» revealed|body|boolean|true|none|
|id|path|string|true|none|
|ticket_id|path|string|true|none|

> Example responses

> Ticket Reveal details

```json
{
  "id": 4963318,
  "serial_number": "71161104-8105-42FD-9A39-5D8BC11690B9",
  "is_revealed": false,
  "is_scratched": false,
  "scratch_state": [
    [
      {
        "revealed": true,
        "prize": "1000"
      },
      {
        "revealed": false,
        "prize": "50"
      },
      {
        "revealed": false,
        "prize": "25"
      }
    ],
    [
      {
        "revealed": false,
        "prize": "50"
      },
      {
        "revealed": false,
        "prize": "250"
      },
      {
        "revealed": false,
        "prize": "25"
      }
    ],
    [
      {
        "revealed": false,
        "prize": "50"
      },
      {
        "revealed": false,
        "prize": "1000"
      },
      {
        "revealed": false,
        "prize": "250"
      }
    ]
  ],
  "photo": {
    "id": 2619,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618153505/v6cl60r3bjpx1xfd8eea.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618153505/v6cl60r3bjpx1xfd8eea.jpg",
    "is_default": false,
    "is_played": true,
    "is_visible": true
  },
  "prize": null
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="update-ticket-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ticket Reveal details|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="update-ticket-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» serial_number|string|true|none|none|
|» is_revealed|boolean|true|none|none|
|» is_scratched|boolean|true|none|none|
|» scratch_state|[any]|true|none|none|
|»» 0|[any]|false|none|none|
|»»» revealed|boolean|true|none|none|
|»»» prize|string|true|none|none|
|»» 1|[any]|false|none|none|
|»»» revealed|boolean|true|none|none|
|»»» prize|string|true|none|none|
|»» 2|[any]|false|none|none|
|»»» revealed|boolean|true|none|none|
|»»» prize|string|true|none|none|
|» photo|object|true|none|none|
|»» id|number|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|boolean|true|none|none|
|»» is_visible|boolean|true|none|none|
|» prize|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-authentication">Authentication</h1>

Creating a session for a player

## Login

<a id="opIdLogin"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/session");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddParameter("application/json", "{\"email\":\"user@email.com\",\"password\":\"ComplexPassword123\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/session \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"email":"user@email.com","password":"ComplexPassword123"}'
```

```http
POST /session HTTP/1.1
Content-Type: application/json
Accept: application/json
Host: api-stg3.snapchance.no
Content-Length: 58

{"email":"user@email.com","password":"ComplexPassword123"}
```

```javascript
const data = JSON.stringify({
  "email": "user@email.com",
  "password": "ComplexPassword123"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/session");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/session",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({email: 'user@email.com', password: 'ComplexPassword123'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/session")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request.body = "{\"email\":\"user@email.com\",\"password\":\"ComplexPassword123\"}"

response = http.request(request)
puts response.read_body
```

`POST /session`

This endpoint is for Player login. Email and password are mandatory fields. After successfull login it generates a token. This token is used as autherization for rest of the endpoints

> Body parameter

```json
{
  "email": "user@email.com",
  "password": "ComplexPassword123"
}
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|body|string|true|none|
|password|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "token": "string",
  "currency": "string",
  "player": {
    "first_name": "string",
    "last_name": "string",
    "birthdate": "string",
    "email": "string",
    "phone_number": null,
    "bank_account_number": null,
    "suspended_until": null,
    "suspended_by": null,
    "weekly_loss_limit": 0,
    "daily_loss_limit": 0,
    "language": "string",
    "is_activated": true,
    "onboarding": true,
    "information": true,
    "activity": {
      "onboarding": true,
      "won_prize": true,
      "won_sc_ticket": true,
      "revealed_all": true
    },
    "avatar": {
      "url": null,
      "thumbnail_url": null
    },
    "exclusion": {
      "service_enabled": true,
      "service_name": "string",
      "state": "string"
    }
  },
  "limits": {
    "balance_limit": "string",
    "transfer_limit": "string",
    "weekly_loss_limit": "string",
    "daily_loss_limit": "string"
  }
}
```

> Returns players session, limits and player details.

> Forbidden

```json
{
  "errors": [
    "Feil e-post eller passord"
  ]
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns players session, limits and player details.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

<h3 id="login-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» token|string|true|none|none|
|» currency|string|true|none|none|
|» player|object|true|none|none|
|»» first_name|string|true|none|none|
|»» last_name|string|true|none|none|
|»» birthdate|string|true|none|none|
|»» email|string|true|none|none|
|»» phone_number|any|false|none|none|
|»» bank_account_number|any|false|none|none|
|»» suspended_until|any|false|none|none|
|»» suspended_by|any|false|none|none|
|»» weekly_loss_limit|number|true|none|none|
|»» daily_loss_limit|number|true|none|none|
|»» language|string|true|none|none|
|»» is_activated|boolean|true|none|none|
|»» onboarding|boolean|true|none|none|
|»» information|boolean|true|none|none|
|»» activity|object|true|none|none|
|»»» onboarding|boolean|true|none|none|
|»»» won_prize|boolean|true|none|none|
|»»» won_sc_ticket|boolean|true|none|none|
|»»» revealed_all|boolean|true|none|none|
|»» avatar|object|true|none|none|
|»»» url|any|false|none|none|
|»»» thumbnail_url|any|false|none|none|
|»» exclusion|object|true|none|none|
|»»» service_enabled|boolean|true|none|none|
|»»» service_name|string|true|none|none|
|»»» state|string|true|none|none|
|» limits|object|true|none|none|
|»» balance_limit|string|true|none|none|
|»» transfer_limit|string|true|none|none|
|»» weekly_loss_limit|string|true|none|none|
|»» daily_loss_limit|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snapchance-registration">Registration</h1>

Registering and activating new player

## Create Player

<a id="opIdCreate Player"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/players");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"code\":\"string\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/players \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"code":"string"}'
```

```http
POST /players HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 17

{"code":"string"}
```

```javascript
const data = JSON.stringify({
  "code": "string"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/players");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/players",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({code: 'string'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/players")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"code\":\"string\"}"

response = http.request(request)
puts response.read_body
```

`POST /players`

This endpoint is the first step in the registration process.  It will create a player. A valid BankID JWT is required to make this API call.  See [Registration Flow](#registration) for more info.

> Body parameter

```json
{
  "code": "string"
}
```

<h3 id="create-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|body|string|true|none|

> Example responses

> Returns players session, limits and player details

```json
{
  "token": "string",
  "currency": "string",
  "player": {
    "first_name": "string",
    "last_name": "string",
    "birthdate": "string",
    "email": null,
    "phone_number": null,
    "bank_account_number": null,
    "suspended_until": null,
    "suspended_by": null,
    "weekly_loss_limit": 0,
    "daily_loss_limit": 0,
    "language": "string",
    "is_activated": true,
    "onboarding": true,
    "information": true,
    "activity": {
      "onboarding": true,
      "won_prize": true,
      "won_sc_ticket": true,
      "revealed_all": true,
      "weekly_result": true
    },
    "currency": "string"
  },
  "limits": {
    "balance_limit": "string",
    "transfer_limit": "string",
    "weekly_loss_limit": "string",
    "daily_loss_limit": "string"
  },
  "exclusion": {
    "service_enabled": false,
    "service_name": null,
    "state": "not_excluded"
  }
}
```

> Bad Request

```json
{
  "param is missing or the value is empty": "code"
}
```

<h3 id="create-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns players session, limits and player details|[player](#schemaplayer)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="create-player-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Activate Player

<a id="opIdActivate Player"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/activation");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"first_name\":\"string\",\"last_name\":\"string\",\"email\":\"string\",\"password\":\"string\",\"is_pep\":true,\"language\":\"string\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/activation \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"first_name":"string","last_name":"string","email":"string","password":"string","is_pep":true,"language":"string"}'
```

```http
POST /activation HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 115

{"first_name":"string","last_name":"string","email":"string","password":"string","is_pep":true,"language":"string"}
```

```javascript
const data = JSON.stringify({
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "password": "string",
  "is_pep": true,
  "language": "string"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/activation");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/activation",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  first_name: 'string',
  last_name: 'string',
  email: 'string',
  password: 'string',
  is_pep: true,
  language: 'string'
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/activation")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"first_name\":\"string\",\"last_name\":\"string\",\"email\":\"string\",\"password\":\"string\",\"is_pep\":true,\"language\":\"string\"}"

response = http.request(request)
puts response.read_body
```

`POST /activation`

This Endpoint is used to activate a Player. It requires that a player already be created using a valid BankID JWT. See [Registration Flow](#registration) for more info.

> Body parameter

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "password": "string",
  "is_pep": true,
  "language": "string"
}
```

<h3 id="activate-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first_name|body|string|true|none|
|last_name|body|string|true|none|
|email|body|string|true|none|
|password|body|string|true|none|
|is_pep|body|boolean|true|none|
|language|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "birthdate": "string",
  "bank_account_number": null,
  "suspended_untill": "string",
  "phone_number": "string",
  "weekly_loss_limit": 0,
  "daily_loss_limit": 0,
  "language": "string",
  "is_activated": true,
  "onboarding": true,
  "information": true,
  "avatar": {
    "url": null,
    "thumbnail_url": null
  }
}
```

> Bad Request

```json
{
  "errors": [
    "Email is already in use"
  ]
}
```

```json
{
  "errors": [
    "Bank account number is invalid"
  ]
}
```

```json
{
  "errors": [
    "Phone number not valid"
  ]
}
```

```json
{
  "errors": [
    "Password is too short (minimum 8 characters)"
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="activate-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns an activated player.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="activate-player-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|true|none|none|
|» first_name|string|true|none|none|
|» last_name|string|true|none|none|
|» birthdate|string|true|none|none|
|» bank_account_number|any|false|none|none|
|» suspended_untill|string|true|none|none|
|» phone_number|string|true|none|none|
|» weekly_loss_limit|number|true|none|none|
|» daily_loss_limit|number|true|none|none|
|» language|string|true|none|none|
|» is_activated|boolean|true|none|none|
|» onboarding|boolean|true|none|none|
|» information|boolean|true|none|none|
|» avatar|object|true|none|none|
|»» url|any|false|none|none|
|»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-payment">Payment</h1>

Callback from the NETs payment gateway

## NETs Callback

<a id="opIdNETs Callback"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/callbacks");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"TransactionId\":\"string\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/callbacks \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"TransactionId":"string"}'
```

```http
POST /callbacks HTTP/1.1
Content-Type: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 26

{"TransactionId":"string"}
```

```javascript
const data = JSON.stringify({
  "TransactionId": "string"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/callbacks");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/callbacks",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({TransactionId: 'string'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/callbacks")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"TransactionId\":\"string\"}"

response = http.request(request)
puts response.read_body
```

`POST /callbacks`

This endpoint is used for handling callback from NETs.  See [Wallet Funding Flow](#wallet-funding) for more info.

> Body parameter

```json
{
  "TransactionId": "string"
}
```

<h3 id="nets-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TransactionId|body|string|true|none|

<h3 id="nets-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns 200 status.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-drawings">Drawings</h1>

Creating and retrieving drawings

## List Entries

<a id="opIdList Entries"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/drawings/0/entries");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/drawings/0/entries \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /drawings/0/entries HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/drawings/0/entries");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/drawings/0/entries",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/drawings/0/entries")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /drawings/{id}/entries`

This endpoint returns a list of entries for a particular drawing.

<h3 id="list-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Drawing ID|

> Example responses

> Retrieve all tickets info in current Entry

```json
[
  {
    "id": 7961,
    "tickets_count": 1,
    "created_at": "2021-04-10T20:13:02.946Z",
    "entry_type": null,
    "is_revealed": true,
    "photo": {
      "id": 2612,
      "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618085581/egnanrjklf5rbrmudrgr.jpg",
      "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618085581/egnanrjklf5rbrmudrgr.jpg",
      "is_default": false,
      "is_played": true,
      "is_visible": true
    },
    "tickets": [
      {
        "id": 4926331,
        "serial_number": "ACF8F90C-B2BA-4CBE-9CC9-D45BC122AD28",
        "is_revealed": false,
        "is_scratched": false,
        "scratch_state": [
          [
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            },
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "250",
              "revealed": false
            }
          ],
          [
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            },
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "50",
              "revealed": false
            }
          ],
          [
            {
              "prize": "50",
              "revealed": false
            },
            {
              "prize": "250",
              "revealed": false
            },
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            }
          ]
        ]
      }
    ]
  },
  {
    "id": 7962,
    "tickets_count": 1,
    "created_at": "2021-04-10T20:17:52.271Z",
    "entry_type": null,
    "is_revealed": true,
    "photo": {
      "id": 2613,
      "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
      "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618085870/cmvzcaodipzlep3x1gvq.jpg",
      "is_default": false,
      "is_played": true,
      "is_visible": true
    },
    "tickets": [
      {
        "id": 4926332,
        "serial_number": "3C9DCDD4-EAC7-4457-9F77-A723CB3CDDA8",
        "is_revealed": false,
        "is_scratched": false,
        "scratch_state": [
          [
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "25",
              "revealed": false
            },
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            }
          ],
          [
            {
              "prize": "50",
              "revealed": false
            },
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            },
            {
              "prize": "250",
              "revealed": false
            }
          ],
          [
            {
              "prize": "50",
              "revealed": false
            },
            {
              "prize": "1000",
              "revealed": false
            },
            {
              "prize": "SnapChanceTicket",
              "revealed": false
            }
          ]
        ]
      }
    ]
  }
]
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="list-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Retrieve all tickets info in current Entry|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» tickets_count|number|true|none|none|
|» created_at|string|true|none|none|
|» entry_type|any|false|none|none|
|» is_revealed|boolean|true|none|none|
|» photo|object|true|none|none|
|»» id|number|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|boolean|true|none|none|
|»» is_visible|boolean|true|none|none|
|» tickets|[any]|true|none|none|
|»» id|number|true|none|none|
|»» serial_number|string|true|none|none|
|»» is_revealed|boolean|true|none|none|
|»» is_scratched|boolean|true|none|none|
|»» scratch_state|[any]|false|none|none|
|»»» 0|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 1|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»»» 2|[any]|false|none|none|
|»»»» prize|string|true|none|none|
|»»»» revealed|boolean|true|none|none|
|»» prize|object|false|none|none|
|»»» id|number|true|none|none|
|»»» name|string|true|none|none|
|»»» description|string|true|none|none|
|»»» value|string|true|none|none|
|»»» quantity|number|true|none|none|
|»»» reveal_type|string|true|none|none|
|»»» image_url|any|false|none|none|
|»»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Drawings

<a id="opIdList Drawings"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/drawings");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/drawings \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /drawings HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/drawings");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/drawings",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/drawings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /drawings`

This endpoint returns a list of all the created drawings.  The complete history of all the drawings may be retrieved.

> Example responses

> Returns started drawings

```json
[
  {
    "id": 2504,
    "name": "QA Test 1",
    "type": "predrawn",
    "headline": "Lottery for testing purpose",
    "description": "MY lottery",
    "ends_at": "2021-04-19T21:01:00.000Z",
    "tickets_count": 1000,
    "ticket_price": "25.00",
    "currency": "NOK",
    "cover_url": null,
    "repeat_every": 604800,
    "prizes": [
      {
        "id": 6809,
        "name": "PrizeInstant1",
        "description": "",
        "value": "25.00",
        "quantity": 50,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6808,
        "name": "PrizeInstant2",
        "description": "",
        "value": "50.00",
        "quantity": 40,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6807,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6806,
        "name": "PrizeInstant4",
        "description": "",
        "value": "1000.00",
        "quantity": 8,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6805,
        "name": "PrizeWeekly1",
        "description": "",
        "value": "50.00",
        "quantity": 100,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6804,
        "name": "PrizeWeekly2",
        "description": "",
        "value": "40.00",
        "quantity": 80,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6803,
        "name": "PrizeWeekly3",
        "description": "",
        "value": "30.00",
        "quantity": 60,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      }
    ]
  },
  {
    "id": 2505,
    "name": "QA Test 1",
    "type": "predrawn",
    "headline": "Lottery for testing purpose",
    "description": "MY Lottery",
    "ends_at": "2021-04-20T21:01:00.000Z",
    "tickets_count": 1000,
    "ticket_price": "25.00",
    "currency": "NOK",
    "cover_url": null,
    "repeat_every": 604800,
    "prizes": [
      {
        "id": 6816,
        "name": "PrizeInstant1",
        "description": "",
        "value": "25.00",
        "quantity": 50,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6815,
        "name": "PrizeInstant2",
        "description": "",
        "value": "50.00",
        "quantity": 40,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6814,
        "name": "PrizeInstant3",
        "description": "",
        "value": "250.00",
        "quantity": 15,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6813,
        "name": "PrizeInstant4",
        "description": "",
        "value": "1000.00",
        "quantity": 8,
        "reveal_type": "instant",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6812,
        "name": "PrizeWeekly1",
        "description": "",
        "value": "50.00",
        "quantity": 100,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6811,
        "name": "PrizeWeekly2",
        "description": "",
        "value": "40.00",
        "quantity": 80,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      },
      {
        "id": 6810,
        "name": "PrizeWeekly3",
        "description": "",
        "value": "30.00",
        "quantity": 60,
        "reveal_type": "drawing_end",
        "image_url": null,
        "thumbnail_url": null
      }
    ]
  }
]
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="list-drawings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns started drawings|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-drawings-responseschema">Response Schema</h3>

Status Code **200**

*Array of Drawings*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» name|string|true|none|none|
|» type|string|true|none|none|
|» headline|string|true|none|none|
|» description|string|true|none|none|
|» ends_at|string|true|none|none|
|» tickets_count|number|true|none|none|
|» ticket_price|string|true|none|none|
|» currency|string|true|none|none|
|» cover_url|any|false|none|none|
|» repeat_every|number|true|none|none|
|» prizes|[any]|true|none|none|
|»» id|number|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|
|»» value|string|true|none|none|
|»» quantity|number|true|none|none|
|»» reveal_type|string|true|none|none|
|»» image_url|any|false|none|none|
|»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Drawing Tickets

<a id="opIdList Drawing Tickets"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/drawings/0/tickets");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/drawings/0/tickets \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /drawings/0/tickets HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/drawings/0/tickets");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/drawings/0/tickets",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/drawings/0/tickets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /drawings/{id}/tickets`

This endpoint returns a list of tickets purchased in a particular drawing.

<h3 id="list-drawing-tickets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Drawing ID|

> Example responses

> Returns a list of drawing tickets

```json
[
  {
    "id": 4961312,
    "serial_number": "A9EE2946-14A7-47E8-B681-BE5C6BF9A7CD",
    "is_revealed": false,
    "is_scratched": false,
    "scratch_state": [
      [
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        },
        {
          "prize": "50",
          "revealed": false
        },
        {
          "prize": "1000",
          "revealed": false
        }
      ],
      [
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        },
        {
          "prize": "50",
          "revealed": false
        },
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        }
      ],
      [
        {
          "prize": "250",
          "revealed": false
        },
        {
          "prize": "25",
          "revealed": false
        },
        {
          "prize": "250",
          "revealed": false
        }
      ]
    ],
    "photo": {
      "id": 1168,
      "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
      "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
      "is_default": false,
      "is_played": true,
      "is_visible": true
    },
    "prize": null
  },
  {
    "id": 4961311,
    "serial_number": "FC713473-C073-4A92-A478-4ECD4E136A04",
    "is_revealed": false,
    "is_scratched": false,
    "scratch_state": [
      [
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        },
        {
          "prize": "25",
          "revealed": false
        },
        {
          "prize": "1000",
          "revealed": false
        }
      ],
      [
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        },
        {
          "prize": "SnapChanceTicket",
          "revealed": false
        },
        {
          "prize": "25",
          "revealed": false
        }
      ],
      [
        {
          "prize": "250",
          "revealed": false
        },
        {
          "prize": "250",
          "revealed": false
        },
        {
          "prize": "50",
          "revealed": false
        }
      ]
    ],
    "photo": {
      "id": 1168,
      "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
      "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1616360370/uxpnbxrtpdivvd41jlqv.jpg",
      "is_default": false,
      "is_played": true,
      "is_visible": true
    },
    "prize": null
  }
]
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="list-drawing-tickets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a list of drawing tickets|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-drawing-tickets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|number|true|none|none|
|» serial_number|string|true|none|none|
|» is_revealed|boolean|true|none|none|
|» is_scratched|boolean|true|none|none|
|» scratch_state|[any]|true|none|none|
|»» 0|[any]|false|none|none|
|»»» prize|string|true|none|none|
|»»» revealed|boolean|true|none|none|
|»» 1|[any]|false|none|none|
|»»» prize|string|true|none|none|
|»»» revealed|boolean|true|none|none|
|»» 2|[any]|false|none|none|
|»»» prize|string|true|none|none|
|»»» revealed|boolean|true|none|none|
|» photo|[photo](#schemaphoto)|true|none|A photo that has been uploaded to be used as an "entry" in a drawing|
|»» id|number|true|none|none|
|»» url|string|true|none|none|
|»» thumbnail_url|string|true|none|none|
|»» is_default|boolean|true|none|none|
|»» is_played|boolean|true|none|none|
|»» is_visible|boolean|true|none|none|
|» prize|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-password">Password</h1>

Password update and reset

## Update Password

<a id="opIdUpdate Password"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/password");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"password\":\"password2\",\"new_password\":\"passwordtest12\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/password \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"password":"password2","new_password":"passwordtest12"}'
```

```http
PATCH /password HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 56

{"password":"password2","new_password":"passwordtest12"}
```

```javascript
const data = JSON.stringify({
  "password": "password2",
  "new_password": "passwordtest12"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/password");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/password",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({password: 'password2', new_password: 'passwordtest12'}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/password")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"password\":\"password2\",\"new_password\":\"passwordtest12\"}"

response = http.request(request)
puts response.read_body
```

`PATCH /password`

This endpoint is used to update a players password.

> Body parameter

```json
{
  "password": "password2",
  "new_password": "passwordtest12"
}
```

<h3 id="update-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|password|body|string|true|none|
|new_password|body|string|true|none|

> Example responses

> Bad Request

```json
{
  "param is missing or the value is empty": "password"
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="update-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|updates player password|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="update-password-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reset Password Email

<a id="opIdReset Password Email"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/password_reset");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"email\":\"test@gmail.com\",\"redirect_url\":\"https://api-stg3.snapchance.no/reset_password\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/password_reset \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"email":"test@gmail.com","redirect_url":"https://api-stg3.snapchance.no/reset_password"}'
```

```http
POST /password_reset HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 89

{"email":"test@gmail.com","redirect_url":"https://api-stg3.snapchance.no/reset_password"}
```

```javascript
const data = JSON.stringify({
  "email": "test@gmail.com",
  "redirect_url": "https://api-stg3.snapchance.no/reset_password"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/password_reset");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/password_reset",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  email: 'test@gmail.com',
  redirect_url: 'https://api-stg3.snapchance.no/reset_password'
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/password_reset")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"email\":\"test@gmail.com\",\"redirect_url\":\"https://api-stg3.snapchance.no/reset_password\"}"

response = http.request(request)
puts response.read_body
```

`POST /password_reset`

This endpoint is used to start the password reset flow by sending an email to the users email address.

> Body parameter

```json
{
  "email": "test@gmail.com",
  "redirect_url": "https://api-stg3.snapchance.no/reset_password"
}
```

<h3 id="reset-password-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|body|string|true|none|
|redirect_url|body|string|true|none|

> Example responses

> Sends a password reset email

```json
{
  "first_name": null,
  "last_name": null,
  "birthdate": null,
  "email": null,
  "phone_number": null,
  "bank_account_number": null,
  "suspended_until": null,
  "weekly_loss_limit": null,
  "daily_loss_limit": null,
  "language": "string",
  "is_activated": true,
  "onboarding": true,
  "information": true,
  "activity": {},
  "currency": "string",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  }
}
```

> Bad Request

```json
{
  "errors": [
    "Email Tokenet er ugyldig"
  ]
}
```

```json
{
  "errors": [
    "Redirect url host er ikke tillatt"
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="reset-password-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sends a password reset email|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="reset-password-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» first_name|any|false|none|none|
|» last_name|any|false|none|none|
|» birthdate|any|false|none|none|
|» email|any|false|none|none|
|» phone_number|any|false|none|none|
|» bank_account_number|any|false|none|none|
|» suspended_until|any|false|none|none|
|» weekly_loss_limit|any|false|none|none|
|» daily_loss_limit|any|false|none|none|
|» language|string|true|none|none|
|» is_activated|boolean|true|none|none|
|» onboarding|boolean|true|none|none|
|» information|boolean|true|none|none|
|» activity|object|true|none|none|
|» currency|string|true|none|none|
|» avatar|object|true|none|none|
|»» url|any|false|none|none|
|»» thumbnail_url|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reset Password

<a id="opIdReset Password"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/password_reset");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
request.AddParameter("application/json", "{\"new_password\":\"password123\",\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/password_reset \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/json' \
  --data '{"new_password":"password123","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"}'
```

```http
PATCH /password_reset HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no
Content-Length: 229

{"new_password":"password123","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"}
```

```javascript
const data = JSON.stringify({
  "new_password": "password123",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/password_reset");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/password_reset",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  new_password: 'password123',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw'
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/password_reset")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'
request.body = "{\"new_password\":\"password123\",\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw\"}"

response = http.request(request)
puts response.read_body
```

`PATCH /password_reset`

This endpoint is used to finalize the reset password process.

> Body parameter

```json
{
  "new_password": "password123",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"
}
```

<h3 id="reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|new_password|body|string|true|none|
|token|body|string|true|none|

> Example responses

> Bad Request

```json
{
  "param is missing or the value is empty": "token"
}
```

```json
{
  "errors": [
    "Redirect url host is not allowed"
  ]
}
```

<h3 id="reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Resets the password|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="reset-password-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-photos">Photos</h1>

Uploading photos

## Add Photo

<a id="opIdAdd Photo"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/photos");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/photos \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data ''
```

```http
POST /photos HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/photos");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/photos",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/photos")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/x-www-form-urlencoded'
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`POST /photos`

This Endpoint is used to upload a photo that can be used to purchase entries into the drawing.

> Body parameter

```yaml
image: string

```

<h3 id="add-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|image|body|string|false|binary|

> Example responses

> Returns photo details

```json
{
  "id": 2615,
  "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1618145262/akrbjbg58eurp05cjj1d.jpg",
  "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1618145262/akrbjbg58eurp05cjj1d.jpg",
  "is_default": false,
  "is_played": false,
  "is_visible": true
}
```

> Bad Request

```json
{
  "errors": [
    "Image cannot be blank"
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="add-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns photo details|[photo](#schemaphoto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="add-photo-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Photos

<a id="opIdList Photos"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/photos");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url https://api-stg3.snapchance.no/photos \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /photos HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/photos");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/photos",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/photos")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /photos`

This endpoint is used to returns the list of photos belonging to the Player.

> Example responses

> Returns a list of photos

```json
[
  {
    "id": 77,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1599137523/cv0mtalx5eq6ctw5rxsx.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1599137523/cv0mtalx5eq6ctw5rxsx.jpg",
    "is_default": true,
    "is_played": true,
    "is_visible": true,
    "winning_count": 2
  },
  {
    "id": 28,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1587132702/ssnhjcvzd9xpelkrqkuj.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1587132702/ssnhjcvzd9xpelkrqkuj.jpg",
    "is_default": true,
    "is_played": false,
    "is_visible": true,
    "winning_count": 0
  },
  {
    "id": 2,
    "url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/v1582624745/afsk1lbbduisirnr740n.jpg",
    "thumbnail_url": "https://res.cloudinary.com/dw6cjlb5l/image/upload/c_fill,g_face,h_200,w_200/v1582624745/afsk1lbbduisirnr740n.jpg",
    "is_default": true,
    "is_played": false,
    "is_visible": true,
    "winning_count": 0
  }
]
```

> Bad Request

```json
{
  "errors": [
    "Image cannot be blank"
  ]
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="list-photos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a list of photos|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<h3 id="list-photos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[photo](#schemaphoto)]|false|none|[A photo that has been uploaded to be used as an "entry" in a drawing]|
|» id|number|true|none|none|
|» url|string|true|none|none|
|» thumbnail_url|string|true|none|none|
|» is_default|boolean|true|none|none|
|» is_played|boolean|true|none|none|
|» is_visible|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Photo

<a id="opIdDelete Photo"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/photos/0");
var request = new RestRequest(Method.DELETE);
request.AddHeader("Accept", "text/plain");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request DELETE \
  --url https://api-stg3.snapchance.no/photos/0 \
  --header 'Accept: text/plain' \
  --header 'Authorization: Bearer {access-token}'
```

```http
DELETE /photos/0 HTTP/1.1
Accept: text/plain
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "https://api-stg3.snapchance.no/photos/0");
xhr.setRequestHeader("Accept", "text/plain");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "DELETE",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/photos/0",
  "headers": {
    "Accept": "text/plain",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/photos/0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Delete.new(url)
request["Accept"] = 'text/plain'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`DELETE /photos/{id}`

This endpoint is used to delete a photo by id.

<h3 id="delete-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of photo|

> Example responses

> 401 Response

```
"HTTP Token: Access denied."
```

<h3 id="delete-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Deletes a photo|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="snapchance-giftcards">GiftCards</h1>

Purchasing gift cards

## Purchase Gift Card

<a id="opIdPurchase Gift Card"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/card_deposits");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddParameter("application/json", "{\"amount\":20,\"redirect_url\":\"https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete\",\"recipient_email\":\"recipient@example.com\",\"recipient_name\":\"Recipient Name\",\"sender_email\":\"sender@example.com\",\"sender_name\":\"Sender Name\",\"message\":\"Message\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```shell
curl --request POST \
  --url https://api-stg3.snapchance.no/card_deposits \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"amount":20,"redirect_url":"https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete","recipient_email":"recipient@example.com","recipient_name":"Recipient Name","sender_email":"sender@example.com","sender_name":"Sender Name","message":"Message"}'
```

```http
POST /card_deposits HTTP/1.1
Content-Type: application/json
Accept: application/json
Host: api-stg3.snapchance.no
Content-Length: 281

{"amount":20,"redirect_url":"https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete","recipient_email":"recipient@example.com","recipient_name":"Recipient Name","sender_email":"sender@example.com","sender_name":"Sender Name","message":"Message"}
```

```javascript
const data = JSON.stringify({
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete",
  "recipient_email": "recipient@example.com",
  "recipient_name": "Recipient Name",
  "sender_email": "sender@example.com",
  "sender_name": "Sender Name",
  "message": "Message"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api-stg3.snapchance.no/card_deposits");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/card_deposits",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  amount: 20,
  redirect_url: 'https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete',
  recipient_email: 'recipient@example.com',
  recipient_name: 'Recipient Name',
  sender_email: 'sender@example.com',
  sender_name: 'Sender Name',
  message: 'Message'
}));
req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/card_deposits")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Accept"] = 'application/json'
request.body = "{\"amount\":20,\"redirect_url\":\"https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete\",\"recipient_email\":\"recipient@example.com\",\"recipient_name\":\"Recipient Name\",\"sender_email\":\"sender@example.com\",\"sender_name\":\"Sender Name\",\"message\":\"Message\"}"

response = http.request(request)
puts response.read_body
```

`POST /card_deposits`

This endpoint is used to purchase gift cards.

> Body parameter

```json
{
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/gift-card-confirm?callback_url=%2Fgift-card-complete",
  "recipient_email": "recipient@example.com",
  "recipient_name": "Recipient Name",
  "sender_email": "sender@example.com",
  "sender_name": "Sender Name",
  "message": "Message"
}
```

<h3 id="purchase-gift-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|body|number|true|none|
|redirect_url|body|string|true|The application URL that NETS will redirect back to|
|recipient_email|body|string|true|none|
|recipient_name|body|string|true|none|
|sender_email|body|string|true|none|
|sender_name|body|string|true|none|
|message|body|string|true|none|

> Example responses

> Purchase payment details

```json
{
  "id": "11611",
  "amount": 50,
  "status": "pending",
  "redirect_url": "https://test.epayment.nets.eu/Terminal/default.aspx?merchantId=12003105&transactionId=abd9b5de99c546e28c2cdd1aef19a7d8"
}
```

> Not Found

```json
{
  "errors": "Access denied."
}
```

<h3 id="purchase-gift-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Purchase payment details|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="purchase-gift-card-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» amount|number|true|none|none|
|» status|string|true|none|none|
|» redirect_url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Gift Card Purchase

<a id="opIdVerify Gift Card Purchase"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/card_deposits/0");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Accept", "application/json");
IRestResponse response = client.Execute(request);
```

```shell
curl --request PATCH \
  --url https://api-stg3.snapchance.no/card_deposits/0 \
  --header 'Accept: application/json'
```

```http
PATCH /card_deposits/0 HTTP/1.1
Accept: application/json
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://api-stg3.snapchance.no/card_deposits/0");
xhr.setRequestHeader("Accept", "application/json");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "PATCH",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/card_deposits/0",
  "headers": {
    "Accept": "application/json"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/card_deposits/0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Patch.new(url)
request["Accept"] = 'application/json'

response = http.request(request)
puts response.read_body
```

`PATCH /card_deposits/{id}`

This endpoint is used to verify a gift card purchase.

<h3 id="verify-gift-card-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Gift Card Purchase ID|

> Example responses

> Returns the purchased gift card details.

```json
{
  "id": "13491",
  "amount": 20,
  "status": "UNCONSUMED",
  "created_at": "2021-04-11T14:19:30.100Z",
  "payment_method": "Visa",
  "card_last_digits": "3422",
  "sender_email": "sender@email.com",
  "claim_code": "ABCD12",
  "recipient_email": "recipient@email.com",
  "recipient_name": "Recipient Name",
  "redirect_url": "null"
}
```

<h3 id="verify-gift-card-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns the purchased gift card details.|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="verify-gift-card-purchase-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|none|
|» amount|number|true|none|none|
|» status|string|true|none|none|
|» created_at|string|true|none|none|
|» payment_method|string|true|none|none|
|» card_last_digits|string|true|none|none|
|» sender_email|string|true|none|none|
|» claim_code|string|true|none|none|
|» recipient_email|string|true|none|none|
|» recipient_name|string|true|none|none|
|» redirect_url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Gift Card Details

<a id="opIdGet Gift Card Details"></a>

> Code samples

```csharp
var client = new RestClient("https://api-stg3.snapchance.no/gift_cards?claim_code=string");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer {access-token}");
IRestResponse response = client.Execute(request);
```

```shell
curl --request GET \
  --url 'https://api-stg3.snapchance.no/gift_cards?claim_code=string' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer {access-token}'
```

```http
GET /gift_cards?claim_code=string HTTP/1.1
Accept: application/json
Authorization: Bearer {access-token}
Host: api-stg3.snapchance.no

```

```javascript
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api-stg3.snapchance.no/gift_cards?claim_code=string");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access-token}");

xhr.send(data);
```

```javascript--node
const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api-stg3.snapchance.no",
  "port": null,
  "path": "/gift_cards?claim_code=string",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api-stg3.snapchance.no/gift_cards?claim_code=string")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'Bearer {access-token}'

response = http.request(request)
puts response.read_body
```

`GET /gift_cards?claim_code={claim_code}`

This endpoint is used to get gift card details by claim code.

<h3 id="get-gift-card-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|claim_code|query|string|true|Gift Card Claim Code|

> Example responses

> Returns gift card details

```json
{
  "claimCode": "AABB1",
  "value": 20,
  "currency": "NOK",
  "sent": "2021-04-11T14:19:30.100Z",
  "notValidAfter": "2021-04-11T14:19:30.100Z",
  "groupId": "41c372c2-6a13-4356-a19b-06180c3334d6",
  "status": "UNCONSUMED",
  "properties": {
    "tpl_from": "Jane Doe",
    "tpl_from_email": "janedoe@email.com",
    "tpl_to": "Jon Doe",
    "tpl_to_email": "johndoe@email.com",
    "tpl_message": "Gift money"
  }
}
```

> 401 Response

```
"HTTP Token: Access denied."
```

> Not Found

```json
{
  "errors": [
    "We couldn't find that gift card code. Please try again."
  ]
}
```

<h3 id="get-gift-card-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns gift card details|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication information is missing or invalid|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

<h3 id="get-gift-card-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» claimCode|string|true|none|none|
|» value|number|true|none|none|
|» currency|string|true|none|none|
|» sent|string|true|none|none|
|» notValidAfter|string|true|none|none|
|» groupId|string|true|none|none|
|» status|string|true|none|none|
|» properties|object|true|none|none|
|»» tpl_from|string|true|none|none|
|»» tpl_from_email|string|true|none|none|
|»» tpl_to|string|true|none|none|
|»» tpl_to_email|string|true|none|none|
|»» tpl_message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_photo">photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "id": 0,
  "url": "string",
  "thumbnail_url": "string",
  "is_default": true,
  "is_played": true,
  "is_visible": true
}

```

A photo that has been uploaded to be used as an "entry" in a drawing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|url|string|true|none|none|
|thumbnail_url|string|true|none|none|
|is_default|boolean|true|none|none|
|is_played|boolean|true|none|none|
|is_visible|boolean|true|none|none|

<h2 id="tocS_player">player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "birthdate": "string",
  "email": "string",
  "phone_number": "string",
  "bank_account_number": "string",
  "suspended_until": null,
  "weekly_loss_limit": 0,
  "daily_loss_limit": 0,
  "language": "string",
  "is_activated": true,
  "onboarding": true,
  "information": true,
  "activity": {
    "won_sc_ticket": true,
    "won_prize": true,
    "onboarding": true,
    "revealed_all": true,
    "weekly_result": true
  },
  "currency": "string",
  "avatar": {
    "url": null,
    "thumbnail_url": null
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|
|birthdate|string|true|none|none|
|email|string|true|none|none|
|phone_number|string|true|none|none|
|bank_account_number|string|true|none|none|
|suspended_until|any|false|none|none|
|weekly_loss_limit|number|true|none|none|
|daily_loss_limit|number|true|none|none|
|language|string|true|none|none|
|is_activated|boolean|true|none|none|
|onboarding|boolean|true|none|none|
|information|boolean|true|none|none|
|activity|object|true|none|none|
|» won_sc_ticket|boolean|true|none|none|
|» won_prize|boolean|true|none|none|
|» onboarding|boolean|true|none|none|
|» revealed_all|boolean|true|none|none|
|» weekly_result|boolean|true|none|none|
|currency|string|true|none|none|
|avatar|object|true|none|none|
|» url|any|false|none|none|
|» thumbnail_url|any|false|none|none|

<h2 id="tocS_subscription">subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "id": 0,
  "amount": "string",
  "tickets_count": 0,
  "photo_id": 0,
  "status": "string",
  "payment_method": "string",
  "card_last_digits": "string",
  "card_expiration_date": "string",
  "redirect_url": null,
  "expires_on": "string",
  "deposit": {
    "id": 0,
    "status": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|amount|string|true|none|none|
|tickets_count|number|true|none|none|
|photo_id|number|true|none|none|
|status|string|true|none|none|
|payment_method|string|true|none|none|
|card_last_digits|string|true|none|none|
|card_expiration_date|string|true|none|none|
|redirect_url|any|false|none|none|
|expires_on|string|true|none|none|
|deposit|object|true|none|none|
|» id|number|true|none|none|
|» status|string|true|none|none|

