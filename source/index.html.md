---
title: SnapChance v2.0.0
language_tabs:
  - csharp: C#
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - nodejs: Node.JS
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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/deactivation";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/deactivation \
  -H 'Accept: text/plain' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/deactivation HTTP/1.1
Host: api-stg3.snapchance.no
Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/deactivation',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/deactivation',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/deactivation',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    /// Make a dummy request
    public async Task MakePutRequest()
    {
      int id = 1;
      string url = "https://api-stg3.snapchance.no/loss_limits";

      
      
      var result = await PutAsync(id, null, url);
          
    }

    /// Performs a PUT Request
    public async Task PutAsync(int id, undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute PUT request
        HttpResponseMessage response = await Client.PutAsync(url + $"/{id}", jsonContent);

        //Return response
        return await DeserializeObject(response);
    }
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PUT https://api-stg3.snapchance.no/loss_limits \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://api-stg3.snapchance.no/loss_limits HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "daily_loss_limit": 1500,
  "weekly_loss_limit": "2900"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/loss_limits',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "daily_loss_limit": 1500,
  "weekly_loss_limit": "2900"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/loss_limits',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://api-stg3.snapchance.no/loss_limits',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/profile \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/profile HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/x-www-form-urlencoded
Accept: application/json

```

```javascript
const inputBody = '{
  "first_name": "Jane",
  "last_name": "Doe"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/profile',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "first_name": "Jane",
  "last_name": "Doe"
};
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/profile',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/profile',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/profile";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/profile \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/profile HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/profile',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/profile',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/profile',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/suspension";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/suspension \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/suspension HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "suspended_until": "2021-04-12T15:28:05.335Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/suspension',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "suspended_until": "2021-04-12T15:28:05.335Z"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/suspension',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/suspension',
  params: {
  }, headers: headers

p JSON.parse(result)

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

## Player Drawings

<a id="opIdPlayer Drawings"></a>

> Code samples

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/player/drawings";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/player/drawings \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/player/drawings HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/player/drawings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/player/drawings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/player/drawings',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/player/drawings/{id}";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/player/drawings/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/player/drawings/{id} HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/player/drawings/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/player/drawings/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/player/drawings/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/subscription";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/subscription \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/subscription HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "drawing_id": 2243,
  "photo_id": 77,
  "redirect_url": "https://snapchance-staging5.netlify.app/subscription/confirm",
  "tickets_count": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "drawing_id": 2243,
  "photo_id": 77,
  "redirect_url": "https://snapchance-staging5.netlify.app/subscription/confirm",
  "tickets_count": 1
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/subscription',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/subscription \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/subscription HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "deposit_id": "20847",
  "drawing_id": 2243
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "deposit_id": "20847",
  "drawing_id": 2243
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/subscription',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/subscription";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/subscription \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/subscription HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/subscription',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/subscription/cancellation";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/subscription/cancellation \
  -H 'Accept: text/plain' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/subscription/cancellation HTTP/1.1
Host: api-stg3.snapchance.no
Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription/cancellation',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription/cancellation',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/subscription/cancellation',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/subscription/entries";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/subscription/entries \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/subscription/entries HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/subscription/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/subscription/entries',
  params: {
  }, headers: headers

p JSON.parse(result)

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
      "cover_url": null
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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/wallet/deposits";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/wallet/deposits \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/wallet/deposits HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/deposits',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "amount": 20,
  "redirect_url": "https://dashboard2-stg3.snapchance.no/deposit-confirm?callback_url=%2Fadd-funds"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/deposits',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/wallet/deposits',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/wallet/deposits/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/wallet/deposits/{id} HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/deposits/{id}',
{
  method: 'PATCH',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/deposits/{id}',
{
  method: 'PATCH',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/wallet/deposits/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/wallet/withdrawals";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/wallet/withdrawals \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/wallet/withdrawals HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "amount": 50
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/withdrawals',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "amount": 50
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/withdrawals',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/wallet/withdrawals',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/wallet/balance";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/wallet/balance \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/wallet/balance HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/balance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/balance',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/wallet/balance',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/wallet/transactions";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/wallet/transactions \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/wallet/transactions HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/wallet/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/wallet/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/drawings/{id}/entries";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/drawings/{id}/entries \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/drawings/{id}/entries HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "photo_id": 0,
  "tickets_count": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/entries',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "photo_id": 0,
  "tickets_count": 0
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/entries',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/drawings/{id}/entries',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /drawings/{id}/entries`

This endpoint is used to buy entries.  An entry consists of a single photo and multiple tickets. Tickets can be scratched for an instant win or be "revealed" at the end of the drawing. Please see the [Ticket Purcahse Flow](#ticket-purchase) for more info.

> Body parameter

```json
{
  "photo_id": 0,
  "tickets_count": 0
}
```

<h3 id="purchase-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Drawing ID|
|photo_id|body|number|true|none|
|tickets_count|body|number|true|none|

> Example responses

> Returns brought tickets Info

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
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Returns brought tickets Info|Inline|
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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/tickets/{id}/reveal";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/tickets/{id}/reveal \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/tickets/{id}/reveal HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/tickets/{id}/reveal',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/tickets/{id}/reveal',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/tickets/{id}/reveal',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/entries";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/entries \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/entries HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/entries',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/entries/{id}";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/entries/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/entries/{id} HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/entries/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/entries/{id}/tickets/{ticket_id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/entries/{id}/tickets/{ticket_id} HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries/{id}/tickets/{ticket_id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
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
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/entries/{id}/tickets/{ticket_id}',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/entries/{id}/tickets/{ticket_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/session";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/session \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://api-stg3.snapchance.no/session HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "email": "user@email.com",
  "password": "ComplexPassword123"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api-stg3.snapchance.no/session',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "email": "user@email.com",
  "password": "ComplexPassword123"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api-stg3.snapchance.no/session',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api-stg3.snapchance.no/session',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/players";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/players \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/players HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "bankid_code": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/players',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "bankid_code": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/players',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/players',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /players`

This endpoint is the first step in the registration process.  It will create a player. A valid BankID JWT is required to make this API call.  See [Registration Flow](#registration) for more info.

> Body parameter

```json
{
  "bankid_code": "string"
}
```

<h3 id="create-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bankid_code|body|string|true|none|

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
  }
}
```

> Bad Request

```json
{
  "param is missing or the value is empty": "bankid_code"
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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/activation";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/activation \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/activation HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "password": "string",
  "is_pep": true,
  "language": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/activation',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "password": "string",
  "is_pep": true,
  "language": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/activation',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/activation',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/callbacks";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/callbacks \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/callbacks HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json

```

```javascript
const inputBody = '{
  "TransactionId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/callbacks',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "TransactionId": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/callbacks',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/callbacks',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/drawings/{id}/entries";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/drawings/{id}/entries \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/drawings/{id}/entries HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/entries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/drawings/{id}/entries',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/drawings";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/drawings \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/drawings HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/drawings',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/drawings/{id}/tickets";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/drawings/{id}/tickets \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/drawings/{id}/tickets HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/tickets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/drawings/{id}/tickets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/drawings/{id}/tickets',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/password \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/password HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "password": "password2",
  "new_password": "passwordtest12"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "password": "password2",
  "new_password": "passwordtest12"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/password',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/password_reset";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/password_reset \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/password_reset HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "email": "test@gmail.com",
  "redirect_url": "https://api-stg3.snapchance.no/reset_password"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password_reset',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "email": "test@gmail.com",
  "redirect_url": "https://api-stg3.snapchance.no/reset_password"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password_reset',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/password_reset',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X PATCH https://api-stg3.snapchance.no/password_reset \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH https://api-stg3.snapchance.no/password_reset HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "new_password": "password123",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password_reset',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "new_password": "password123",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoic2Vzc2lvbiIsImV4cCI6MTYxODE3NzY3MiwicGxheWVyX2lkIjoyMjcsImVtYWlsIjoidGVzdDAzMDhAZ21haWwuY29tIn0.HUUED6peO2v72s1j_etfVC_qcmzI0z7euShtQH2IhIw"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/password_reset',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://api-stg3.snapchance.no/password_reset',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    /// Make a dummy request
    public async Task MakePostRequest()
    {
      string url = "https://api-stg3.snapchance.no/photos";
      
      
      await PostAsync(null, url);
      
    }

    /// Performs a POST Request
    public async Task PostAsync(undefined content, string url)
    {
        //Serialize Object
        StringContent jsonContent = SerializeObject(content);

        //Execute POST request
        HttpResponseMessage response = await Client.PostAsync(url, jsonContent);
    }
    
    
    
    /// Serialize an object to Json
    private StringContent SerializeObject(undefined content)
    {
        //Serialize Object
        string jsonObject = JsonConvert.SerializeObject(content);

        //Create Json UTF8 String Content
        return new StringContent(jsonObject, Encoding.UTF8, "application/json");
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X POST https://api-stg3.snapchance.no/photos \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://api-stg3.snapchance.no/photos HTTP/1.1
Host: api-stg3.snapchance.no
Content-Type: application/x-www-form-urlencoded
Accept: application/json

```

```javascript
const inputBody = '{
  "image": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "image": "string"
};
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://api-stg3.snapchance.no/photos',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    /// Make a dummy request
    public async Task MakeGetRequest()
    {
      string url = "https://api-stg3.snapchance.no/photos";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }
    
    
    
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X GET https://api-stg3.snapchance.no/photos \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://api-stg3.snapchance.no/photos HTTP/1.1
Host: api-stg3.snapchance.no
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://api-stg3.snapchance.no/photos',
  params: {
  }, headers: headers

p JSON.parse(result)

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
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/// <<summary>>
/// Example of Http Client
/// <</summary>>
public class HttpExample
{
    private HttpClient Client { get; set; }

    /// <<summary>>
    /// Setup http client
    /// <</summary>>
    public HttpExample()
    {
      Client = new HttpClient();
    }
    
    
    
    
    /// Make a dummy request
    public async Task MakeDeleteRequest()
    {
      int id = 1;
      string url = "https://api-stg3.snapchance.no/photos/{id}";

      await DeleteAsync(id, url);
    }

    /// Performs a DELETE Request
    public async Task DeleteAsync(int id, string url)
    {
        //Execute DELETE request
        HttpResponseMessage response = await Client.DeleteAsync(url + $"/{id}");

        //Return response
        await DeserializeObject(response);
    }
    
    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body 
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

```shell
# You can also use wget
curl -X DELETE https://api-stg3.snapchance.no/photos/{id} \
  -H 'Accept: text/plain' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://api-stg3.snapchance.no/photos/{id} HTTP/1.1
Host: api-stg3.snapchance.no
Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'text/plain',
  'Authorization':'Bearer {access-token}'
};

fetch('https://api-stg3.snapchance.no/photos/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://api-stg3.snapchance.no/photos/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

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

