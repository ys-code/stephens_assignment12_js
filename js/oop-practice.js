// STEP 1
//function Cat(){window.console.log("Cat is created")};
//let Dog = function (){window.console.log("Dog is created")};

// STEP 2
//let myCat=new Cat();
//let myDot=new Dog();

// STEP 3
//let Animal = function(){
//    this.displayMessage =function() {window.console.log("The Animal has been created.")};
//}
//let newAnimal=new Animal;
//newAnimal.displayMessage();

// STEP 4
//let Animal = function(type){
//    this.type=type;
//    window.console.log("The animal", type, "is created");
//};
//let myAnimal = new Animal ("dog");

// STEP 5
//let Animal = function(type,breed,color,height,length) {
//    this.type=type;
//    this.breed=breed;
//    this.color=color;
//    this.height=height;
//    this.length=length;
//};
//let myAnimal = new Animal("dog","bulldog","brown",15,24)

// STEP 6
//for(property in myAnimal){
//    window.console.log(property);
//}

// STEP 7
//Animal.prototype.speak = function() {
//    if(this.type==="dog"){return ("The ",this.color,"dog is barking!")}
//    else{return (("The ",this.color,"cat is meowing!"))}
//};
//let myAnimal = new Animal("dog","bulldog","brown",15,24)
//window.console.log(myAnimal.speak());

// STEP 8
//let Animal = function(type,breed,color,height,length){
//    let _type=type, _breed=breed, _color=color, _height=height,_length=length;
//    let checkType = function() {
//        if(_type==="dog"){return "dog"}
//        else{return "cat"}
//    };
//    this.speak = function() {
//        window.console.log("The", checkType(), "has made a noise!")};
//};
//let myAnimal= new Animal ("dog","bulldog","brown",15,24);
//myAnimal.speak();

// STEP 9
//String.prototype.findWords = function (text) {
//    let textLength=text.length;
//    let count=0;
//    let index=0;
//    while(index<this.length && index>=0){
//        let foundIndex=this.indexOf(text,index);
//        if (foundIndex>=0){count+=1;index=foundIndex+textLength;}
//        else{break;}
//    }
//    return count;
//};
//let msg="We found your dog in the dog house."
//let word="dog"
//window.console.log(`The message has ${msg.findWords(word)} ${word} words `);