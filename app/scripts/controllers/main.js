'use strict';

/**
 * @ngdoc function
 * @name swordDesignscoukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swordDesignscoukApp
 */
angular.module('swordDesignscoukApp')
  .controller('MainCtrl', function ($scope, $log) {
	  
	  $log.log('Initialising MainCtrl...');
	  
	  $scope.Initialise3d = function () {
		  
		  $log.log('Initialising 3d environment...');
		  
			var canvas = document.getElementById("renderCanvas");
			var engine = new BABYLON.Engine(canvas, true);
	
			var createScene = function () {
	
				// Set the scene and background color
				var scene = new BABYLON.Scene(engine);
				scene.clearColor = new BABYLON.Color3(250,250,250);
			
				// Create a camera
				var camera = new BABYLON.ArcRotateCamera("Camera", 1.0,
					1.0, 12, BABYLON.Vector3.Zero(), scene);
			
				// Attach camera to canvas
				camera.attachControl(canvas, false);
			
				// Add a light
				var light = new BABYLON.HemisphericLight("hemi",
					new BABYLON.Vector3(0, 1, 0), scene);
			
				// Reflect the light off the ground to light the mesh bottom
				light.groundColor = new BABYLON.Color3(0.5, 0, 0.5);
			
				// Create a builtin shape
				var box = BABYLON.Mesh.CreateBox("mesh", 3, scene);
				box.showBoundingBox = true;
			
				// Define a material
				var material = new BABYLON.StandardMaterial("std", scene);
				material.diffuseColor = new BABYLON.Color3(0.5, 0, 0.5);
			
				// Apply the material
				box.material = material;
			
				var animationBox = new BABYLON.Animation(
					"myAnimation", "rotation.y", 360,
					BABYLON.Animation.ANIMATIONTYPE_FLOAT,
					BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
			
				var keys = []; 
				keys.push({ frame: 0, value: 0 });
				keys.push({ frame: 30000, value: 90 });
				
				animationBox.setKeys(keys);
				
				box.animations.push(animationBox);
				
				scene.beginAnimation(box, 0, 30000, true);
				
				return scene;
			};
			
			var scene = createScene();
	
			engine.runRenderLoop(function () {
				scene.render();
			});
	
			// Resize
			window.addEventListener("resize", function () {
				engine.resize();
			});
			
			$log.log('3d environment initialised.');
	  };
	  
	 
	if (BABYLON.Engine.isSupported()) {
		$log.log('BabylonJS engine is available - initialising 3d environment...');
		$scope.Initialise3d();
	}
	else
	{
		$log.log('BabylonJS engine is NOT available.');
	}
	
	$log.log('MainCtrl initialisation complete.');
  });
