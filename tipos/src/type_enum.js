"use strict";
// type ENUM (enumerar)
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
// console.log(DesignColors.white)
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
