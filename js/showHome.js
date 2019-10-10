const showHome = () => {
    clear()
    $('#wrapper').append($('<h1 style="text-align: center; font-size: 60px; padding-top:30px">Welcome to Geekton</h1>'));  
    $('#wrapper').append($(showIntro()));
    $('#wrapper').append($(showGoals()));
    $('#wrapper').append($(showLetter()));
    $('#index').append($(makeHomeMenu()));
    addFooter()
}

const showIntro = () => {
  let intro = `
    <div id="brief-intro">
      <div id="subdivision"><hr></div>
      <div class="row">
        <div class="col-lg-7 align-middle">
          <h1>Brief Intro</h1>
          <div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #333333, transparent); margin: 10px"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus, euismod ut massa ac, mollis luctus arcu. Praesent dui augue, consectetur vitae nulla luctus, vestibulum volutpat lacus. Integer convallis fermentum fermentum. Nam a magna auctor justo tincidunt fringilla eget in justo. Donec in sapien non eros accumsan ullamcorper congue a mi. Vivamus hendrerit commodo sem ut venenatis. Suspendisse potenti. Nunc fermentum, sem vitae luctus scelerisque, augue sem consequat ipsum, nec sodales lorem purus vel ex. Nulla in euismod</p>
        </div>
        <div class="col-lg-5">
          <img class="picture" src="https://picsum.photos/600/400">
        </div>
      </div>
    </div>

    <div id="division"><hr></div>
  `
  return intro
}

const showGoals = () => {
  let goals = `
    <div id="our-goals">
      <h1 id="title-our-goals">Our Goals!</h1>
      <div id="our-goal1">
        <div id="subdivision"><hr></div>
        <div class="row">
          <div class="col-lg-7">
            <h1>Goal1</h1>
            <div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #333333, transparent); margin: 10px"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus, euismod ut massa ac, mollis luctus arcu. Praesent dui augue, consectetur vitae nulla luctus, vestibulum volutpat lacus. Integer convallis fermentum fermentum. Nam a magna auctor justo tincidunt fringilla eget in justo. Donec in sapien non eros accumsan ullamcorper congue a mi. Vivamus hendrerit commodo sem ut venenatis. Suspendisse potenti. Nunc fermentum, sem vitae luctus scelerisque, augue sem consequat ipsum, nec sodales lorem purus vel ex. Nulla in euismod</p>    
          </div>
          <div class="col-lg-5">
            <img class="picture" src="https://picsum.photos/600/400">
          </div>
        </div>
      </div>
      <div id="our-goal2">
      <div id="subdivision"><hr></div>
        <div class="row">
          <div class="col-lg-5">
            <img class="picture" src="https://picsum.photos/600/400">
          </div>
          <div class="col-lg-7">
            <h1>Goal2</h1>
            <div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #333333, transparent); margin: 10px"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus, euismod ut massa ac, mollis luctus arcu. Praesent dui augue, consectetur vitae nulla luctus, vestibulum volutpat lacus. Integer convallis fermentum fermentum. Nam a magna auctor justo tincidunt fringilla eget in justo. Donec in sapien non eros accumsan ullamcorper congue a mi. Vivamus hendrerit commodo sem ut venenatis. Suspendisse potenti. Nunc fermentum, sem vitae luctus scelerisque, augue sem consequat ipsum, nec sodales lorem purus vel ex. Nulla in euismod</p>      
          </div>
        </div>
      </div>
      <div id="our-goal3">
        <div id="subdivision"><hr></div>
        <div class="row">
          <div class="col-lg-7">
            <h1>Goal3</h1>
            <div style="width:100%; height: 1px; background-image: linear-gradient(to right, transparent, #333333, transparent); margin: 10px"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus, euismod ut massa ac, mollis luctus arcu. Praesent dui augue, consectetur vitae nulla luctus, vestibulum volutpat lacus. Integer convallis fermentum fermentum. Nam a magna auctor justo tincidunt fringilla eget in justo. Donec in sapien non eros accumsan ullamcorper congue a mi. Vivamus hendrerit commodo sem ut venenatis. Suspendisse potenti. Nunc fermentum, sem vitae luctus scelerisque, augue sem consequat ipsum, nec sodales lorem purus vel ex. Nulla in euismod</p>      
          </div>
          <div class="col-lg-5">
            <img class="picture" src="https://picsum.photos/600/400">
          </div>
        </div>
      </div>
    </div>
  `
  return goals
}

const showLetter = () => {
  let letter = `
    <div id="the-founders-letter">
      <h1 id="title-founders-letter">The founders' letter</h1>
      <h1>To you all:</h1>
      <p style="margin-top: 30px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus, euismod ut massa ac, mollis luctus arcu. Praesent dui augue, consectetur vitae nulla luctus, vestibulum volutpat lacus. Integer convallis fermentum fermentum. Nam a magna auctor justo tinium felis sed bibendum tincidunt. Sed orci tellus, euismodcidunt fringilla eget in justo. Donec in sapien non eros accumsan ullamcorpeium felis sed bibendum tincidunt. Sed orci tellus, euismodr congue a mi. Vivamus hendrerit commodo sem ut venenatis. Suspendisse potenti. Nunc fermentum, sem vitae luctus scelerisque, augue sem consequat ipsum, nec sodales lorem purus vel ex. Nulla in euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium felis sed bibendum tincidunt. Sed orci tellus</p>
      <h1 style="text-align: right">From the founders</h1>
    </div>
  `
  return letter
}

const makeHomeMenu = () => {
  let menu = `
    <h4><a href="#header"><img src="pics/Geekton-logo.png" style="border-radius: 100%"></a></h4>
    <h4><a href="#brief-intro">Brief Introduction</a></h4>
    <h4>
      <span style="color: #ffffff">Our Goals:</span>
      <ul>
        <li style="margin-top: 5px; margin-bottom: 5px"><a href="#our-goal1">Goal1</a></li>
        <li style="margin-top: 5px; margin-bottom: 5px"><a href="#our-goal2">Goal2</a></li>
        <li style="margin-top: 5px; margin-bottom: 5px"><a href="#our-goal3">Goal3</a></li>
      </ul>
    </h4>
    <h4><a href="#the-founders-letter">the Founders' letter</a></h4>
  `
  return menu
}