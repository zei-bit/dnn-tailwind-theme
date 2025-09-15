<!--#include file="partials/_registers.ascx" -->
<!--#include file="partials/_includes.ascx" -->

<div class="aperture-theme tw:min-h-screen tw:flex tw:flex-col">
  <!-- Header/NavBar -->
  <!--#include file="partials/_header.ascx" -->
  
  <!-- Main Content -->
  <main class="aperture-main tw:flex-1">
    <!-- full-bleed hero or banners -->
    <div id="BannerPane" runat="server"></div>

    <!-- centered content stack -->
    <div class="tw:max-w-7xl tw:mx-auto tw:w-full tw:px-4 tw:py-8">
      <div id="ContentPane" class="aperture-content-pane" runat="server"></div> 
    </div>

    <!-- anything that should break out full width again -->
    <div id="FluidPane" runat="server"></div>
  </main>

  <!-- Footer -->
  <!--#include file="partials/_footer.ascx" -->
</div>