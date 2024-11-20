


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
    "files"
  ];

  if(listExceptions.indexOf(name) == -1) {
    return true;

  }

  return false;
}



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
        "raw": `{{url}}/api/${data.url}`,
        "host": [
          `{{url}}`
        ],
        "path": [
          "api",
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
        "raw": `{{local}}/api/${data.url}/count`,
        "host": [
          `{{url}}`
        ],
        "path": [
          "api",
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
        "raw": `{{local}}/api/${data.url}/:id`,
        "host": [
          `{{url}}`
        ],
        "path": [
          "api",
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
        "raw": `{{url}}/api/${data.url}`,
        "host": [
          `{{url}}`,
        ],
        "path": [
          "api",
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
        "raw": `{{url}}/api/${data.url}/:id`,
        "host": [
          `{{url}}`,
        ],
        "path": [
          "api",
          data.url,
          ":id"
        ]
      }
    },
    "response": []
  }
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
  generateUUID,
  structureGET,
  structureCount,
  structurePOST,
  structurePUT,
  structureDelete,
  tableExceptions,
  capitalize
}
