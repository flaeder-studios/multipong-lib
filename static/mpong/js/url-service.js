(function () {
    angular.module('url-service', [])
        .factory('urlService', [function () {
            var service = {};

            service.gameUri = '/game';
            service.joinUri = '/game/method/join';
            service.leaveUri = '/game/method/leave';
            service.stateUri = '/game/state';
            service.paddleUri = '/game/paddle';
            service.playerUri = '/player';

            return service;
        }]);
})();
