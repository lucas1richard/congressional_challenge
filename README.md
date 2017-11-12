# Congressional Data Competition
The competition can be found at the following url:
**https://www.challenge.gov/challenge/congressional-data-competition/**

### Congress currently has this system in place:

For Tracking Legislation: **https://www.congress.gov/search?q=%7B%22source%22%3A%22legislation%22%2C%22congress%22%3A%22115%22%7D**

For Tracking Congressmens' Activities: **https://www.congress.gov/member/ed-perlmutter/P000593**

> **What are we looking for?**
> 
> LC would like to inspire creative use of technology to analyze digital Congressional information from Congress.gov. This could take the form of interactive visualizations, mobile or desktop applications, a website, or other digital creation.

---

> The Library of Congress sponsors this legislative data challenge to advance the discovery, use, and exploration of the collection of legislative information the Library offers to the nation and the world through the website Congress.gov.
> 
> Presented in cooperation with the United States Congress and the Government Publishing Office, Congress.gov offers the public a rich collection of documents about the legislative process of the United States, including bills and laws, Congressional rules, calendars and journals, and records of Congressional hearings and meetings.
> 
> **The purpose of this challenge is to encourage the development of tools, methods, and materials that help American citizens and the rest of the world discover, access, and analyze Congress.gov information in new ways.**

## Data Sources

* __Bill Status RSS__ [xml] - https://www.govinfo.gov/rss/billstatus-batch.xml
  * __USGPO Guide__ [md] - https://github.com/usgpo/bill-status
* __House Floor Today__ [xml] - https://www.congress.gov/rss/house-floor-today.xml
* __Senate Floor Today__ [xml] - https://www.congress.gov/rss/senate-floor-today.xml
* __Most Viewed Bills__ [xml] - https://www.congress.gov/rss/most-viewed-bills.xml
* __Bills Presented to the President__ [xml] - https://www.congress.gov/rss/presented-to-president.xml
* __Bill Detail (example)__ [xml] - https://www.govinfo.gov/content/pkg/BILLS-115sres323is/xml/BILLS-115sres323is.xml
* __Bulk Data__ [json] - https://www.govinfo.gov/bulkdata/json/BILLS/115/1/hjres
  * __USGPO Guide__ [md] - https://github.com/usgpo/bulk-data

## Legislation

### Lifecycle

1. Introduced
2. Passed House
3. Passed Senate
4. To President
5. Became Law

### Other information worth tracking:

* Summary
* Text
* Actions (e.g. "Referred to the House Committee on the Judiciary")
* Titles
* Amendments
* Sponsor
* Cosponsors
* Committees
* Related Bills