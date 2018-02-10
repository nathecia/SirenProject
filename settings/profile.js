const _ = require('lodash'),
      fs = require('fs'),
      path = require('path');

class Profile {
    constructor() {
        this.profile = require('../data/profile.json');
    }

    saveFile() {
        fs.writeFileSync(path.resolve(__dirname, '../data/profile.json'), JSON.stringify(this.profile, null, 4), 'utf-8');
    }

    update(index, data) {
        let profile = this.profile[index],
            newProfile = _.defaults(data, profile);
        this.profile[index] = newProfile;
        this.saveFile();
    }
    remove(index) {
      this.profile.splice(index, 1);
      this.saveFile();
    }

    get() {
        return this.profile;
    }
}

module.exports = new Profile();