<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="header">
          <div class="logo">
            <img src="img/logos/iba-logo-slogan.svg" alt="IBA Global healing" />
          </div>
          <div class="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam in
              facilisis enim venenatis. Enim cursus quam ut sollicitudin neque
              dignissim id. Eros euismod .
            </p>
            <div class="social-media">
              <a
                href="facebook.com"
                target="_blank"
                mat-icon-button
                matTooltip="Facebook"
              >
                <img src="img/icons/facebook-circle.svg" alt="Facebook" />
              </a>
              <a
                href="twitter.com"
                target="_blank"
                mat-icon-button
                matTooltip="Twitter"
              >
                <img src="img/icons/twitter-circle.svg" alt="Twitter" />
              </a>
              <a
                href="youtube.com"
                target="_blank"
                mat-icon-button
                matTooltip="Youtube"
              >
                <img src="img/icons/youtube-circle.svg" alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
        <div class="links column-one">
          <div class="title"><b>Support</b></div>
          <div class="item-link">
            <router-link to="/404ErrorPage">
              <a class="link hover-linear"> Contact Us </a>
            </router-link>
          </div>
          <div class="item-link">
            <router-link to="/HelpCenter">
              <a class="link hover-linear"> Help Center </a>
            </router-link>
          </div>
          <div class="item-link">
            <a class="link hover-linear"> FAQs </a>
          </div>
        </div>
        <div class="links column-two">
          <div class="title"><b>Legal</b></div>
          <div class="item-link">
            <router-link to="/privacypolicy">
              <a class="link hover-linear"> Privacy Policy </a>
            </router-link>
          </div>
          <div class="item-link">
            <router-link to="/termsandconditions">
              <a class="link hover-linear"> Terms and conditions </a>
            </router-link>
          </div>
          <div class="item-link">
            <a class="link hover-linear"> Ethics </a>
          </div>
          <div class="item-link">
            <a class="link hover-linear"> Media Kit </a>
          </div>
        </div>
      </div>
      <div class="sub-footer">
        <p class="body-2">
          Copyright @ 2005 - 2021 International BodyTalk Association (IBA)
        </p>
        <div class="powered">
          <p class="body-2">
            Powered by
            <a
              href="https://agencycoda.com/"
              target="_blank"
              class="link hover-linear"
            >
              Agency Coda
            </a>
          </p>
          <a href="https://agencycoda.com/" target="_blank">
            <img src="img/logos/coda-favicon.svg" alt="Agengy Coda" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

