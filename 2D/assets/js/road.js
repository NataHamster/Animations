var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

window.onload = function(){	
	draw();
}

var width_path_near = 80,
width_path_far = 30;

var tree_size = 100;
var forest_left = [];
var forest_right = [];

var tree1 = new Image(); 
var tree2 = new Image(); 
var tree3 = new Image(); 
var tree4 = new Image(); 

tree1.src = "assets/img/forest/tree1.png";
tree2.src = "assets/img/forest/tree2.png";
tree3.src = "assets/img/forest/tree3.png";
tree4.src = "assets/img/forest/tree4.png";

var masTree = [tree1, tree2, tree3, tree4];
var randTree_l = Math.floor(Math.random()*masTree.length);	
var randTree_r = Math.floor(Math.random()*masTree.length);
		
forest_left[0] = {
	x : cvs.width/2-width_path_near-tree_size/2,
	y : cvs.height/2-tree_size+10,
	size : 	tree_size,
	src: masTree[randTree_l]
}  

forest_right[0] = {
	x : cvs.width/2+width_path_near-tree_size/2,
	y : cvs.height/2-tree_size+2,
	size : 	tree_size,
	src: masTree[randTree_r]
}            

function draw() { 
	//ctx.clearRect(0, 0, cvs.width, cvs.height);  
	//ctx.fillStyle = "rgb(84,209,216)";  
	
	var grd = ctx.createLinearGradient(0, 0, 0, 300); 
	grd.addColorStop(0, "blue");
	grd.addColorStop(1, "rgb(122, 218, 235)");
    ctx.fillStyle = grd; 	
	ctx.fillRect(0, 0, 1000, 300);
	
	ctx.fillStyle = "rgb(48,187,23)";  
	ctx.fillRect(0, 300, 1000, 600);

	ctx.fillStyle =  "rgb(128,64,0)";  
	ctx.beginPath();
	ctx.moveTo(cvs.width/2-width_path_near, 600);
	ctx.lineTo(cvs.width/2-width_path_far, 300);
	ctx.lineTo(cvs.width/2+width_path_far, 300);
	ctx.lineTo(cvs.width/2+width_path_near, 600);
	ctx.closePath();
	ctx.fill();
	
	var randTree_l = Math.floor(Math.random()*masTree.length);
    var randTree_r = Math.floor(Math.random()*masTree.length);	
	//console.log(randTree)	
	
	for (let i=0; i<forest_left.length; i++){
	    ctx.drawImage(forest_left[i].src, forest_left[i].x, forest_left[i].y, forest_left[i].size, forest_left[i].size); 		
			
		if(forest_left[i].y == 3*cvs.height/4){			
			forest_left.push({
				y : cvs.height/2-tree_size+10,
				x : cvs.width/2-width_path_near-tree_size/2,
				size : 	tree_size,
				src: masTree[randTree_l]
			});						
		}
		
		forest_left[i].y += 0.5;
		forest_left[i].x -= 0.5;
		forest_left[i].size +=  0.5;		
		
    }	
	
	for (let i=0; i<forest_right.length; i++){
	   	ctx.drawImage(forest_right[i].src, forest_right[i].x, forest_right[i].y, forest_right[i].size, forest_right[i].size); 
			
		if(forest_right[i].y == 3*cvs.height/4){			
			forest_right.push({
				y : cvs.height/2-tree_size+10,
				x : cvs.width/2+width_path_near-tree_size/2,
				size : 	tree_size,
				src: masTree[randTree_r]
			});				
		}		
				
		forest_right[i].y += 0.5;
		forest_right[i].x -= 0.1;
		forest_right[i].size +=  0.5;
    }
	 
	requestAnimationFrame(draw);
}