<template>
  <footer id="tt-footer" style="">
    <div class="tt-footer-inner">
      <!-- Begin footer column
		========================= -->
      <div class="footer-col tt-align-center-left">
        <div class="footer-col-inner">
          <div class="magnetic-wrap">
            <div class="magnetic-item subscribe-hide">
              <button
                data-tf-slider="bfozRHd0"
                data-tf-width="550"
                data-tf-hide-headers=""
                data-tf-position="left"
                data-tf-auto-close="1000"
                data-tf-iframe-props="title=ar.io Site Emails"
                data-tf-medium="snippet"
                style="
                  all: unset;
                  display: inline-block;
                  max-width: 100%;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  height: 50px;
                  cursor: pointer;
                  line-height: 50px;
                  text-align: center;
                  margin: 0;
                  text-decoration: none;
                "
                data-tf-loaded="true"
              >
                Subscribe
                <i class="fas fa-paper-plane" style="padding-left: 10px"></i>
              </button>
              <!-- <script src="//embed.typeform.com/next/embed.js"></script> -->
            </div>
          </div>
        </div>
        <!-- /.footer-col-inner -->
      </div>
      <!-- Begin footer column -->
      <!-- Begin footer column
		========================= -->
      <div class="footer-col tt-align-center order-m-last">
        <div class="footer-col-inner">
          <div class="magnetic-wrap">
            <div class="magnetic-item">
              <a
                href="/../terms-and-conditions"
                target="_blank"
                rel="noopener"
                class="tt-btn tt-btn-link"
                >Terms and Conditions</a
              >
            </div>
          </div>
        </div>
        <!-- /.footer-col-inner -->
      </div>
      <!-- Begin footer column -->
      <!-- Begin footer column
		========================= -->
      <div class="footer-col tt-align-center-right">
        <div class="footer-col-inner">
          <div class="footer-social">
            <div class="footer-social-text">
              <span>Follow</span><i class="fas fa-share-alt"></i>
            </div>
            <div class="social-buttons">
              <ul>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://github.com/ardriveapp"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-github"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://discord.gg/HGG52EtTc2"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-discord"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://www.instagram.com/ardriveapp/"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://www.reddit.com/r/ar_io/"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      style=""
                      ><i class="fab fa-reddit"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://www.tiktok.com/@ardrive.io"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-tiktok"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://www.youtube.com/channel/UCL4JlkVcgUjyVz4IlKvbS_g"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://www.linkedin.com/company/68614891"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      ><i class="fab fa-linkedin"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div class="magnetic-wrap">
                    <a
                      href="https://twitter.com/ar_io_team"
                      class="magnetic-item not-hide-cursor"
                      target="_blank"
                      rel="noopener"
                      style=""
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- /.social-buttons -->
          </div>
          <!-- /.footer-social -->
        </div>
        <!-- /.footer-col-inner -->
      </div>
      <!-- Begin footer column -->
    </div>
    <!-- /.tt-section-inner -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#tt-footer {
  position: relative;
  width: 100%;
  font-size: 14px;
  z-index: 2;
  /* background-image:  url("../img/footer-background.jpg"); */
  /* background-size: cover; */
  /* background-image:  url("../img/footer-background.jpg"); */
  height: 10vh;
  /* background-color: #171717; */
}

.tt-footer-inner {
  position: relative;
}
body:not(.tt-boxed) .tt-footer-inner,
.tt-footer-inner:not(.tt-wrap) {
  padding-left: 3.5%;
  padding-right: 3.5%;
}

#tt-footer a {
  font-size: 14px;
  color: #fff;
}

#tt-footer .tt-btn {
  margin-top: 3px;
  margin-bottom: 3px;
}

/* Footer copyright */
#tt-footer .tt-copyright {
  color: #888;
}
#tt-footer .tt-copyright a {
  color: #888;
}
#tt-footer .tt-copyright a:hover {
}

#tt-footer .tt-copyright .tt-btn-link {
  font-weight: normal;
}
#tt-footer .tt-copyright.text-gray .tt-btn-link > * {
  color: #ccc;
}
#tt-footer .tt-copyright.text-gray:hover .tt-btn-link .tt-btn-icon {
}

/* For desktop only
	==================== */
@media (min-width: 1025px) {
  #tt-footer {
    padding: 30px 0;
  }
  #tt-footer.footer-absolute {
    position: absolute;
    left: 0;
    bottom: 30px;
    padding: 0;
    pointer-events: none;
  }
  #tt-footer.footer-absolute a {
    pointer-events: initial;
  }

  .tt-footer-inner {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  /* Footer columns */
  .footer-col {
    flex: 1;
    padding: 0 15px;
    margin: 0 5px;
  }
  .footer-col:first-child {
    margin-left: 0;
    padding-left: 0;
  }
  .footer-col:last-child {
    margin-right: 0;
    padding-right: 0;
  }
  .footer-col-inner {
  }

  /* Align footer column content */
  .footer-col.tt-align-top-center {
    display: flex;
    justify-content: center;
  }
  .footer-col.tt-align-top-right {
    display: flex;
    justify-content: flex-end;
  }

  .footer-col.tt-align-center-left {
    display: flex;
    align-items: center;
  }
  .footer-col.tt-align-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer-col.tt-align-center-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .footer-col.tt-align-bottom {
    display: flex;
    align-items: flex-end;
  }
  .footer-col.tt-align-bottom-center {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .footer-col.tt-align-bottom-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  /* Footer social */
  #tt-footer .footer-social {
    position: relative;
    line-height: 50px;
    height: 50px;
    pointer-events: auto;
    color: #fff;
  }
  #tt-footer .footer-social:before {
    /* expands the hover area */
    position: absolute;
    content: "";
    top: 0;
    bottom: -30px;
    left: 0;
    right: 0;
    z-index: -1;
  }
  #tt-footer .footer-social .footer-social-text {
    display: block;
    text-align: right;
    font-size: 15px;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
  }
  #tt-footer .footer-social .footer-social-text > span {
    margin-right: 13px;
  }
  #tt-footer .footer-social .social-buttons {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -50%, 0);
  }
  #tt-footer .footer-social .footer-social-text,
  #tt-footer .footer-social .social-buttons {
    transition: all 0.3s ease;
  }

  #tt-footer .footer-social:hover .footer-social-text {
    transform: translate3d(0, -50%, 0);
    opacity: 0;
    visibility: hidden;
  }
  #tt-footer .footer-social:hover .social-buttons {
    transform: translateY(-100%);
    opacity: 1;
    visibility: visible;
  }
}

/* For smaller screens only
	============================ */
@media (max-width: 1024px) {
  #tt-footer {
    padding: 60px 0;
    height: auto;
  }
  .tt-footer-inner {
    display: flex;
    flex-direction: column;
  }

  /* Footer columns */
  .footer-col {
    display: block;
    margin-bottom: 50px;
    text-align: center;
  }
  .footer-col:first-child {
  }
  .footer-col:last-child {
  }
  .footer-col-inner {
  }

  /* Order footer columns */
  .footer-col.order-m-first {
    order: -1;
  }
  .footer-col.order-m-last {
    order: 10;
  }
  .footer-col.order-m-1 {
    order: 1;
  }
  .footer-col.order-m-2 {
    order: 2;
  }
  .footer-col.order-m-3 {
    order: 3;
  }
  .footer-col.order-m-4 {
    order: 4;
  }
  .footer-col.order-m-5 {
    order: 5;
  }
  .footer-col.order-m-6 {
    order: 6;
  }
  .footer-col.order-m-7 {
    order: 7;
  }
  .footer-col.order-m-8 {
    order: 8;
  }
  .footer-col.order-m-9 {
    order: 9;
  }
  .footer-col.order-m-10 {
    order: 10;
  }

  /* Footer copyright */
  #tt-footer .tt-copyright .tt-btn-link {
    height: auto;
  }

  /* Footer social */
  #tt-footer .footer-social {
    margin-bottom: 10px;
  }
  #tt-footer .footer-social .footer-social-text {
    display: none;
  }
  #tt-footer .social-buttons > ul > li a {
    width: 34px;
    height: 34px;
  }
}

/* Community Diagram */

#tt-diagram-community .tt-diagram-community-dark {
  display: none;
  opacity: 0.9;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
}

#tt-diagram-community .tt-diagram-community-dark:hover {
  opacity: 1;
  transform: scale(1.1);
}

#tt-diagram-community .tt-diagram-community-light {
  display: block;
  opacity: 0.9;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
}

#tt-diagram-community .tt-diagram-community-light:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* Protocol Diagram */

#tt-diagram-protocol .tt-diagram-protocol-dark {
  display: none;
  opacity: 0.9;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
}

#tt-diagram-protocol .tt-diagram-protocol-dark:hover {
  opacity: 1;
  transform: rotate(30deg);
}

#tt-diagram-protocol .tt-diagram-protocol-light {
  display: block;
  opacity: 0.9;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
}

#tt-diagram-protocol .tt-diagram-protocol-light:hover {
  opacity: 1;
  transform: rotate(30deg);
}

</style>
