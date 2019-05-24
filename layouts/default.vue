<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/restaurant">Restaurant Search</b-nav-item>
          <b-nav-item href="/polymial">Polymial</b-nav-item>
          <b-nav-item href="/cv">CV</b-nav-item>
          <b-nav-item href="/line">LINE Project</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="content">
      <nuxt/>
    </div>
    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Uttapong Ruangrit</p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.mastfoot {
  padding: 15px;
  background-color: #343a40;
  color: #fff;
}
.content {
  min-height: 500px;
  padding: 10px 30px 20px 30px;
}
</style>
