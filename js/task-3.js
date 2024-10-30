const profile = {
    userName: 'John',
    playTime: 300,
    changeUserName(userName) {
        this.userName = userName;
    },
    updatePlayTime(playTime) {
        this.playTime = playTime;
    },
    getInfo() {
        return this.userName + ' has ' + this.playTime + ' active hours.';
    }
}

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUserName("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"