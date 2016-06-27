rootApp.controller('index',['$scope','$http','$state',function($scope,$http,$state){
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/chat');
    $scope.allChat = [];

    socket.on('connect',function(){
        console.log("connected js");
    });

    socket.on('message',function(msg){
        $scope.allChat.push(msg);
        $scope.$apply();
    });

    $scope.setIndentity = function () {
        $scope.salute = 'Welcome' + ' ' +$scope.userName;
    }


    $scope.sendChat = function () {
        msgData = {'user':$scope.userName.toUpperCase(),'msg':$scope.message};
        socket.emit('sendmsg',msgData);
        $scope.message = "";
        /*var elm = document.getElementByID('pane');
        elm.scrollTop = elm.scrollHeight;*/
    }

}]);






