# HTTP: Hypertext Transfer Protocol

HTTP is the protocol that determines _how_ we make requests and responses

## Requests and responses

Requests have:

- a url
- a method
- headers
- body (some have this, not all)

### Methods

The HTTP method reflects what kind of information we're sending or what we expect the server to do with it
The server decides how to handle our request, depending on the method

- GET - request data
- POST - send data
- PUT - (we'll come back to how this is different)
- DELETE - delete data
- OPTIONS
- more weird ones

### URL - Uniform Resource Locator

`https://mail.google.com/mail/u/0/#inbox`

`protocol://subdomain.domain.extensionOrTLD/path/to/wherever?query_params=extra_info&more_params=more_info#place-on-the-page`

#### Query parameters

any url can be modified with query params

- also called "query string" or "url parameters"
- how they are handled is up to the recipient
- made up of key/val pairs

  - ?key=val&key=val

  https://www.amazon.com/Woods-0165-Brooder-Guard-Reflector/dp/B001BM5YZW/
  ?
  \_encoding=UTF8

  &pd*rd_w=mT8VS
  &content-id=amzn1.sym.255b3518-6e7f-495c-8611-30a58648072e%3Aamzn1.symc.a68f4ca3-28dc-4388-a2cf-24672c480d8f
  &pf_rd_p=255b3518-6e7f-495c-8611-30a58648072e
  &pf_rd_r=9ZBYDBPTNQHA54062XC0
  &pd_rd_wg=wIsFS&pd_rd_r=5e4b895b-aac2-42ad-9286-a19ce48e230d&ref*=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d
