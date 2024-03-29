rh._.exports({"0":["image_xscale"],"1":["image_xscale"],"2":["image_xscale"],"3":["\n  ","\n  ","\n  ","This value sets the horizontal scaling applied to the sprite that has been assigned to the current instance. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite), larger values\n    will scale up and negative values will flip the sprite ","and"," scale it unless the value used is exactly -1 (in which case the sprite is just flipped about its origin with no scaling).","\n  ","\n  "," ","\n  ","\n  ","image_xscale;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","if image_xscale < 5","     {\n    ","     image_xscale += 0.2;","     image_yscale = image_xscale;","     }\n    "," else\n    ","     {\n    ","     instance_create_layer(x, y, \"Effects\", obj_Explosion);","     instance_destroy();\n    ","     }\n  ","\n  ","The above code scales the sprite and then once it is scaled to 5 times its original size, a new instance of another object is created and the instance destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","image_yscale","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["image_xscale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"604"})