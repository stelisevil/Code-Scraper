const cheerio = require('cheerio');


let htmlSource = "<body><div id="fb-root"></div>

<script type="text/javascript">
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<!-- Fills container bg with the same styling -->
<div id="headerbg">
	<div id="navbg">
    </div>
</div>

<div id="container">

	<script>
        $(function(){
          $("#includedheader").load("topnav.html");
        });
    </script>

    <div id="includedheader"></div>

    <!-- Main content -->
    <div id="maincontent">

        <h3>Welcome to Manchester Handball Club</h3>


		<script src="script/jquery.cycle.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(function(){
                $('#slideshow').cycle({
                    fx: 'fade',
                    timeout: 5000
                });
            });
        </script>

<!--- START - HOMEPAGE INTRODUCTION BOX -->

<div id="homepage_introduction">

    <div id="leftcoltop">
        <div id="slideshow">
            <img src="images/homepage/home_scroll1.jpg" alt="Handball men's action shot on goal" />
            <img src="images/homepage/home_scroll2.jpg" alt="Handball women's action shot on goal" />
            <img src="images/homepage/home_scroll3.jpg" alt="Handball men's action shot passing" />
            <img src="images/homepage/home_scroll4.jpg" alt="Handball women's team talk" />
            <img src="images/homepage/home_scroll5.jpg" alt="Handball men's action shot from bench" />

        </div>
    </div>

    <div id="rightcoltop">
<!-- Join Us Blurb -->


<h4>Join Us For A New Season!</h4><p>We're getting ready for a new season of handball, so it's a great time to come and join us!</p>

<p>Whether you're completely new or have played for years, we have a team and training sessions for you. Just <a href='contactus.html'>contact us</a> and come and play handball in Manchester!  You can also check out our <a href='training_info.html'>training times</a>  and just come along - your first session is always free!</p>

<!-- About Us Blurb Short


<h4>About the Club</h4><p>Manchester Handball Club was founded in 2003 and quickly became one of the most successful handball clubs in the UK.</p>
 <p>We are committed to providing a fun, friendly environment for players of all ages and abilities to come together and take part in the sport of handball. <a href='aboutus_info.html'>Read more...</a></p>
-->

<div id="blogindex">
<h4>Latest News</h4>
<div class="blogpost"><p><a href='newsitem.php?blogpost=2017/12/04/training-update-and-christmas-holidays/'><span class="pubDate">04/12/2017</span> - <strong>Training Update and Christmas Holidays</a></strong></p></div><div class="blogpost"><p><a href='newsitem.php?blogpost=2017/11/07/training-update-for-the-next-few-weeks/'><span class="pubDate">07/11/2017</span> - <strong>Training Update For The Next Few Weeks</a></strong></p></div><div class="blogpost"><p><a href='newsitem.php?blogpost=2017/09/21/mens-1st-team-season-starts-at-loughborough/'><span class="pubDate">21/09/2017</span> - <strong>Men’s 1st Team Season Starts at Loughborough</a></strong></p></div><div class="blogpost"><p><a href='newsitem.php?blogpost=2017/09/12/mens-eha-cup-draw/'><span class="pubDate">12/09/2017</span> - <strong>Men’s EHA Cup Draw</a></strong></p></div><div class="blogpost"><p><a href='newsitem.php?blogpost=2017/08/07/pre-season-training-starting-soon/'><span class="pubDate">07/08/2017</span> - <strong>Pre-season Training Starting Soon</a></strong></p></div></div>

    </div>
</div>
<!--- END - HOMEPAGE INTRODUCTION BOX -->


<!-- START - FIXTURES - LAST AND NEXT -->




<div id="fix_last_next">
    <div id="leftcol">
        <h4>Latest Results</h4><p><b>Men 1</b> - Sat 28th Apr - Leeds Beckett (H) W 33:21</p><p><b>Men 2</b> - Sat 21st Apr - University of Lincoln (H) W 30:21</p><p><b>Women</b> - Sat 12th May - Leeds University (H) L 21:28</p>    </div>
    <div id="rightcol">
        <h4>Next Games</h4>    </div>
</div>
<!-- END - FIXTURES - LAST AND NEXT -->

		<div id="homepage_main">

            <div id="leftcol">
                <div id="blogcontainernews">
                    <div class="blogpost"><p><h4>Training Update and Christmas Holidays</h4></p><p><span class="pubDate">Monday 4th December 2017</span></p><p>We are BACK to our ORIGINAL TRAINING LAYOUT from this week.<br />
Please find details below:</p>
<p>Mondays<br />
Women: 7:30 – 9:00pm at Burnage Academy for Boys (M19 1FG)</p>
<p>Tuesdays<br />
Men 7:30 – 9:00pm at Burnage Academy for Boys (M19 1FG)</p>
<p>Thursdays<br />
Men and Women 7:00 – 9:00pm at Velodrome (M11 4DQ)</p>
<p>Fridays<br />
U12 6:00 – 7:00pm at Pars Wood High School (M20 5PG)<br />
U18 7:00 – 8:00pm at Pars Wood High School</p>
<p>This year, CHRISTMAS HOLIDAYS will start on 18th of December until 3rd of January, so THERE IS NO TRAINING during this period. We are back on training on Thursday, 4th of January, at Velodrome and we will follow the layout above.</p>
<p>If you have any questions, please contact your coach or members of the Committee.</p>
</div><div class="blogpost"><p><h4>Training Update For The Next Few Weeks</h4></p><p><span class="pubDate">Tuesday 7th November 2017</span></p><p>The velodrome IS NOT AVAILABLE until 2nd of December, so we have a NEW TRAINING LAYOUT for the following weeks.<br />
The new layout STARTS THIS WEEK, find details below:</p>
<p>Mondays<br />
WOMEN 7:30 &#8211; 9:00pm at Burnage Academy for Boys</p>
<p>Tuesdays<br />
MEN 7:30 &#8211; 9:00pm at Burnage Academy for Boys</p>
<p>Wednesdays<br />
MEN 7:30 &#8211; 9:00pm at Burnage Academy for Boys</p>
<p>Fridays<br />
JUNIORS 6:00 &#8211; 7:00pm at Pars Wood High School (M20 5PG)<br />
WOMEN 7:00 &#8211; 8:30pm at Pars Wood High School</p>
<p>If you have any question, please contact your coach or a member of the committee.</p>
</div><div class="blogpost"><p><h4>Men’s 1st Team Season Starts at Loughborough</h4></p><p><span class="pubDate">Thursday 21st September 2017</span></p><p>Our men&#8217;s 1st team start the new season in the National League North with an away fixture.  The team will be looking to get off to a good start and improve on last year&#8217;s fourth place finish.</p>
<p>The game takes place at the <a href="http://www.manchesterhandballclub.co.uk/venuepage.php?venueid=VEN023">Sir David Wallace Sports Hall</a> with the throw off at 2:30pm.</p>
<p><strong>Last Season&#8217;s Results</strong></p>
<p>Championship (North)</p>
<p>Saturday 19th November 2016 &#8211; Loughborough 25:9 Manchester<br />
Sunday 12th March 2017 &#8211; Manchester 21:22 Loughborough</p>
<p> </p>
</div><div class="blogpost"><p><h4>Men’s EHA Cup Draw</h4></p><p><span class="pubDate">Tuesday 12th September 2017</span></p><p><img data-attachment-id="495" data-permalink="https://manchesterhandballclub.wordpress.com/2017/09/12/mens-eha-cup-draw/eha_logo/" data-orig-file="https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=92&#038;h=141" data-orig-size="181,279" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="EHA_logo" data-image-description="" data-medium-file="https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=92&#038;h=141?w=181" data-large-file="https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=92&#038;h=141?w=181" class="  wp-image-495 alignleft" src="https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=92&#038;h=141" alt="EHA_logo" width="92" height="141" align="left" srcset="https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=92&amp;h=141 92w, https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png?w=97&amp;h=150 97w, https://manchesterhandballclub.files.wordpress.com/2017/09/eha_logo.png 181w" sizes="(max-width: 92px) 100vw, 92px" /><br />
Manchester have been drawn away to Newcastle Vikings in the first round of the EHA Men&#8217;s National Cup.  The game is scheduled for the weekend of the 4th/5th November (subject to change).</p>
<p>The rest of the draw can be viewed on the <a href="http://www.englandhandball.com/news/cup-and-shield-entries-confirmed">England Handball Association Website</a></p>
</div><div class="blogpost"><p><h4>Pre-season Training Starting Soon</h4></p><p><span class="pubDate">Monday 7th August 2017</span></p><p>Pre-season training starts again this week as we get ready for a new season of handball!  If you are interested in playing handball &#8211; whether you&#8217;re an experienced player or just want to try a new sport &#8211; it&#8217;s a great time to come and join us!</p>
<p>Sessions are being run on Wednesdays and Saturday through August &#8211; here is the schedule:<br />
<strong>Wednesday 9th August</strong> : Levenshulme School for Girls, 7pm to 9pm<br />
<strong>Saturday 12th August</strong>  : Levenshulme School for Girls, 10am to 1pm (incl. Beginners)<br />
<strong>Wednesday 16th August</strong>: Levenshulme School for Girls, 7pm to 9pm<br />
<strong>Saturday 19th August</strong> : National Cycling Centre, 10am to 1pm<br />
<strong>Wednesday 23rd August</strong>: Levenshulme School for Girls, 7pm to 9pm<br />
<strong>Saturday 26th August</strong> : National Cycling Centre, 10am to 1pm<br />
<strong>Wednesday 30th August</strong>: Levenshulme School for Girls, 7pm to 9pm<br />
<strong>Saturday 2nd September</strong> : National Cycling Centre, 10am to 1pm</p>
<p>These sessions are for both men and women (age 16+)</p>
<p>Each session costs £3 to attend, and are FREE if you were a full member last season.<br />
If you are coming to a club training session for the first time, your first session is FREE so you can come along and join in.  Just come to the venue and take part, or you can <a href="http://www.manchesterhandballclub.co.uk/contactus.php">contact us</a> for further information.</p>
<p>You can find all the details of the training venues <a href="http://www.manchesterhandballclub.co.uk/training_info.html">here</a></p>
<p>We look forward to welcoming everyone for a new season!</p>
</div>                </div>
            </div>

<div id="rightcol">

<div id="facebook">
<h4>Facebook</h4>

<div class="fb-like-box" data-href="https://www.facebook.com/ManchesterHandballClub" data-width="400" data-show-faces="true" data-stream="true" data-show-border="true" data-header="true"></div></div>

<div id="twitter">
<h4>Twitter</h4>
<a class="twitter-timeline" href="https://twitter.com/ManchesterHC" data-widget-id="346736478761648130" width="400" height="500">Tweets by @ManchesterHC</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div>

<div id="twitter">
<h4>Instagram</h4>

<!-- LightWidget WIDGET --><script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/ab398ecc330d5eed8a191b606de00b9e.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>

</div>





</div>



</div>

<!--
<div id="sponsors">
        	<h4>Manchester Handball Club is sponsored by</h4>
            <ul>
            	<li><a href="http://www.accessoryo.com/" target="_blank"><img src="images/accessoryo.jpg" alt="Accessoryo" id="sponsor1" /></a></li>
                <li><a href="http://sportsinjuryclinicphysio.co.uk/" target="_blank"><img src="images/sponsor2.jpg" alt="Sports Injury Clinic" id="sponsor2" /></a></li>
                <li><a href="http://stolenlamb.com/" target="_blank"><img src="images/sponsor3.png" alt="Stolen Lamb" id="sponsor3" /></a></li>
                <li><a href="http://www.jtsgroup.com/" target="_blank"><img src="images/sponsor4.jpg" alt="JTS Group" id="sponsor4" /></a></li>
                <li><a href="http://www.screwplan.co.uk/" target="_blank"><img src="images/sponsor5.jpg" alt="Screwplan Ltd" id="sponsor5" /></a></li>
            </ul>
        </div>
    </div>

-->
    <!-- End main content -->


</div>
<!-- End container -->

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42665826-1', 'manchesterhandballclub.co.uk');
  ga('send', 'pageview');

</script>

</body>"

const $ = cheerio.load('htmlSource');

console.log($('<body>').text())
