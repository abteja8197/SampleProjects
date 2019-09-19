/**
*
**/

const config = {
  apiHost: '//localhost:1337/',
  endPoints: {
    employees: 'employees',
    courses: 'courses',
    steps: 'stpes'
  },
  buildURL: function(action) {
    if(!this.endPoints.hasOwnProperty(action) || !this.endPoints.hasOwnProperty(action)) {
      return false;
    }
    return (this.apiHost + this.endPoints[action]) || false;
  }
};

export default config;