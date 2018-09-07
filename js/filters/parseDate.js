resumeApp.filter("parseDate", function () {
    return function (x) {
        if (x){
            return moment(x).format('MM/DD/YYYY');
        }
    }
});