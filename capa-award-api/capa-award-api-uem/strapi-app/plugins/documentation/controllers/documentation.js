'use strict';



'use strict';

const fs = require('fs');




const structureGET = (data) => {
  return {
    "name": `[GET] ${data.title}`,
    "request": {
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer {{bearer}}",
          "type": "text"
        },
        {
          "key": "Content-Type",
          "value": "application/json",
          "type": "text"
        }
      ],
      "url": {
        "raw": `{{url}}/${data.url}`,
        "host": [
          `{{url}}`
        ],
        "path": [
          data.url
        ]
      }
    },
    "response": []
  }
}

const structureCount = (data) => {
  return {
    "name": `[Count] ${data.title}`,
    "request": {
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer {{bearer}}",
          "type": "text"
        },
        {
          "key": "Content-Type",
          "value": "application/json",
          "type": "text"
        }
      ],
      "url": {
        "raw": `{{local}}/${data.url}/count`,
        "host": [
          `{{url}}`
        ],
        "path": [
          data.url,
          "count"
        ]
      }
    },
    "response": []
  }
}


const structureDelete = (data) => {
  return {
    "name": `[DELETE] ${data.title}`,
    "request": {
      "method": "DELETE",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer {{bearer}}",
          "type": "text"
        },
        {
          "key": "Content-Type",
          "value": "application/json",
          "type": "text"
        }
      ],
      "url": {
        "raw": `{{local}}/${data.url}/:id`,
        "host": [
          `{{url}}`
        ],
        "path": [
          data.url,
          ":id"
        ]
      }
    },
    "response": []
  }
}


const structurePOST = (data) => {
  return {
    "name": `[POST] ${data.title}`,
    "request": {
      "method": "POST",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer {{bearer}}",
          "type": "text"
        },
        {
          "key": "Content-Type",
          "value": "application/json",
          "type": "text"
        }
      ],
      "body": {
        "mode": "raw",
        "raw": JSON.stringify(data.attributes),
        "options": {
          "raw": {
            "language": "json"
          }
        }
      },
      "url": {
        "raw": `{{url}}/${data.url}`,
        "host": [
          `{{url}}`,
        ],
        "path": [
          data.url
        ]
      }
    },
    "response": []
  }
}


const structurePUT = (data) => {
  return {
    "name": `[PUT] ${data.title}`,
    "request": {
      "method": "PUT",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer {{bearer}}",
          "type": "text"
        },
        {
          "key": "Content-Type",
          "value": "application/json",
          "type": "text"
        }
      ],
      "body": {
        "mode": "raw",
        "raw": JSON.stringify(data.attributes),
        "options": {
          "raw": {
            "language": "json"
          }
        }
      },
      "url": {
        "raw": `{{url}}/${data.url}/:id`,
        "host": [
          `{{url}}`,
        ],
        "path": [
          data.url,
          ":id"
        ]
      }
    },
    "response": []
  }
}


const defaultStructure = () => {
    return [
        {
            "name": `[PUT] User`,
            "request": {
                "method": "PUT",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{bearer}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": JSON.stringify({data: "user"}),
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": `{{url}}/user/update`,
                    "host": [
                        `{{url}}`,
                    ],
                    "path": [
                        "user",
                        "update"
                    ]
                }
            },
            "response": []
        },
        {
            "name": `[POST] User Change Password`,
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{bearer}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": JSON.stringify({currentPassword: "xxxx", newPassword: "xxxx"}),
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": `{{url}}/user/update-password`,
                    "host": [
                        `{{url}}`,
                    ],
                    "path": [
                        "user",
                        "update-password"
                    ]
                }
            },
            "response": []
        },
        {
            "name": `[GET] User Me`,
            "request": {
                "method": "GET",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{bearer}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": `{{url}}/user/me`,
                    "host": [
                        `{{url}}`,
                    ],
                    "path": [
                        "user",
                        "me"
                    ]
                }
            },
            "response": []
        }
            


    ]
}



const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}


const generateUUID = () => { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


const tableExceptions = (name) => {
  let listExceptions = [
    "admin_permissions",
    "admin_users",
    "admin_roles",
    "strapi_api_tokens",
    "i18n_locale",
    "up_permissions",
    "up_roles",
    "files",
    "locale",
    "permission",
    "role",
    "file",
    "user"
  ];

  if(listExceptions.indexOf(name) == -1) {
    return true;

  }

  return false;
}

module.exports = {
  index: async (ctx) => {
    const response = {
      "info": {
        "_postman_id": generateUUID(),
        "name": "Strapi Project",
        "description": "#### Filters\n\nWhen using filters you can either pass simple filters in the root of the query parameters or pass them in a _where parameter.\nFilters are used as a suffix of a field name:\n\n###### (No suffix or eq) = Equal\n###### (ne)\t  = Not equal\n###### (lt)\t  = Less than\n###### (gt)\t  = Greater than\n###### (lte)\t  = Less than or equal to\n###### (gte)\t  = Greater than or equal to\n###### (in)\t  = Included in an array\n###### (nin)\t  = Not included in an array\n###### (contains)\t  = Contains\n###### (ncontains)  = Doesn't contain\n###### (containss) = Contains, case sensitive\n###### (ncontainss) = Doesn't contain, case sensitive\n###### (null)\t  = Is null or not null\n\n#### Examples\nGET /users?firstName=John\nGET /users?firstName_eq=John\nGET /restaurants?price_gte=3\nGET /restaurants?id_in=3&id_in=6&id_in=8\n\n#### Deep filtering\nGET /restaurants?chef.restaurant.star=5\n\n#### Sort\nGET /users?_sort=email:ASC\nGET /users?_sort=email:DESC\n\n#### Limit\nGET /users?_limit=30\n\n#### Start\nGET /users?_start=10&_limit=10",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
      },
      "item": [],
    };
    
    let metadata =  strapi.db.models;
    const items = defaultStructure();

    metadata.forEach(obj => {
        if(obj.modelName !== undefined) {
            if(tableExceptions(obj.modelName)) {

                delete obj.allAttributes.id;
                delete obj.allAttributes.createdAt;
                delete obj.allAttributes.updatedAt;
                delete obj.allAttributes.publishedAt;
                delete obj.allAttributes.createdBy;
                delete obj.allAttributes.updatedBy;

                let url = "";

                if(obj.modelName === "up_users") {
                    url = `${obj.modelName.replace("_", "-").replace("up-", "")}`

                } else {
                    url = `${obj.collectionName.replace("_", "-")}`

                }

                let data = {
                    title: capitalize(obj.modelName),
                    attributes: obj.allAttributes,
                    url: url
                }

                items.push(structureGET(data));

                if(obj.modelName !== "privacy-policy" && obj.modelName !== "terms-use") {
                    items.push(structureCount(data));
                    items.push(structurePOST(data));
                    items.push(structurePUT(data));
                    items.push(structureDelete(data));
                }

            }
        }
    })

    response.item = items;
    
    ctx.send(response);
  }
};
