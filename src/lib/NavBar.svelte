<script>
  let navbarOpen = false
</script>

<div class="navbar shadow bg-slate-900">
    <!-- Left Menu - Desktop (Hidden in Phone) -->
    <div class="navbar-start hidden lg:flex">
        <div class="lg:flex">
            <ul class="flex lg:flex-row lg:space-x-0">
                <li class="group">
                    <a  class="flex py-3 px-3 rounded-md text-white border-red-700
                             hover:bg-slate-800 focus:outline active:bg-violet-700
                             border-b-2" 
                        href="/">
                        Women
                    </a>
                    <!-- dropdown Women-->
                    <div class="lg:absolute bg-slate-900 w-52 rounded-md hidden group-hover:block">
                      <ul class="flex flex-col space-y-2">
                        <li class="">
                          <a  class="flex w-full pl-4 p-2 rounded-md
                                  hover:bg-slate-800"
                              href="/">
                            Sharee
                          </a>
                            <!-- dropdown Women sub menu-->
                            <div class="lg:absolute bg-slate-800 w-52 rounded-md hidden top-0 ml-52">
                              <ul class="flex flex-col space-y-2">
                                <li class="">
                                  <a  class="flex w-full pl-4 p-2 rounded-md
                                          hover:bg-slate-700"
                                      href="/">
                                    Sub 1
                                  </a>
                                </li>
                                <li class="">
                                  <a  class="flex w-full pl-4 p-2 rounded-md
                                          hover:bg-slate-700"
                                      href="/">
                                    Sub 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                        </li>
                        <li class="">
                          <a  class="flex w-full pl-4 p-2 rounded-md
                                  hover:bg-slate-800"
                              href="/">
                            Tops
                          </a>
                        </li>
                      </ul>
                    </div>
                </li>
                <li class="group">
                  <a class="flex py-3 px-3 rounded-md text-white border-red-700
                           hover:bg-slate-800 focus:outline active:bg-violet-700
                            border-b-0" 
                      href="/">
                    Men
                  </a>
                  <!-- dropdown Men-->
                  <div class="lg:absolute bg-slate-900 w-52 rounded-md hidden group-hover:block">
                    <ul class="flex flex-col space-y-2">
                      <li class="">
                        <a  class="flex w-full pl-4 p-2 rounded-md
                                hover:bg-slate-800"
                            href="/">
                          Panjabi 
                        </a>
                      </li>
                      <li class="group">
                        <a  class="flex w-full pl-4 p-2 rounded-md
                                hover:bg-slate-800"
                            href="/">
                          Shirt
                        </a>
                        <!-- dropdown Men sub-menu-->
                        <div class="lg:absolute bg-slate-800 w-52 rounded-md hidden group-hover:hidden top-0 ml-52">
                          <ul class="flex flex-col space-y-2">
                            <li class="">
                              <a  class="flex w-full pl-4 p-2 rounded-md
                                      hover:bg-slate-700"
                                  href="/">
                                Sub 1
                              </a>
                            </li>
                            <li class="">
                              <a  class="flex w-full pl-4 p-2 rounded-md
                                      hover:bg-slate-700"
                                  href="/">
                                Sub 2
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Kids</a></li>
                <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Accessories</a></li>
                <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Home Decor</a></li>
            </ul>
        </div>
    </div>

    <!-- Left Menu - Mobile (Hidden in Desktop) -->
    <div class="navbar-start lg:hidden ">
        <button class="btn btn-ghost btn-circle focus:outline focus:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>         
    
        </button>
        <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
    </div>
    

    <!-- Main Brand Logo -->
    <div class="navbar-center">
        <div class="w-20 ">
            <a href="/">
                <img src="https://deshal.net/wp-content/uploads/2020/09/logo-deshal-line-red.png" alt="Deshal logo">
            </a>
        </div>
    </div>
    
    <div class="navbar-end">
        <div class="flex flex-row">
          <!-- Search icon for desktop - hidden in mobile -->
          <div class="hidden lg:inline-flex ">
            <a class="btn btn-ghost btn-circle"
                href="/">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </a>
          </div>
          <div class="">
            <!-- Wishlist -->
            <button class="btn btn-ghost btn-circle focus:outline"
                href="/">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <div class="">
            <!-- Cart -->
            <div class="dropdown dropdown-end rounded-3xl">
              <label for="" tabindex="0" class="btn btn-ghost btn-circle focus:outline">
                <div class="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span class="badge badge-secondary badge-sm indicator-item">12</span>
                </div>
              </label>
              <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-slate-900 shadow">
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $999</span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <!-- profile -->
            <div class="dropdown dropdown-end w-8 lg:w-10">
              <label for="some" tabindex="0" class="btn btn-ghost btn-circle avatar border">
                <div class="rounded-full w-6 ring-2 ring-purple-400 border">
                  <img src="https://placeimg.com/80/80/people" alt="some"/>
                </div>
              </label>
              <ul tabindex="0" 
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-md w-52">
                <li>
                  <a href="/" class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</div>

<div class="w-full h-full hidden lg:hidden md:hidden bg-slate-900" x-data={navbarOpen}>
  <ul class="flex flex-col lg:space-x-0">
    <li class="">
        <a  class="flex py-3 px-3 rounded-md text-white border-red-700 md:w-screen
                 hover:bg-slate-800 focus:outline focus:bg-slate-700 active:bg-violet-700
                 border-b-2" 
            href="/">
            Women
        </a>
    </li>
    <li class="">
        <a  class="flex py-3 px-3 rounded-md text-white border-red-700 md:w-screen
                 hover:bg-slate-800 focus:outline focus:bg-slate-700 active:bg-violet-700
                 border-b-0" 
            href="/">
            Men
        </a>
    </li>
    <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Kids</a></li>
    <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Accessories</a></li>
    <li><a class="flex py-3 px-3 text-white rounded-md hover:bg-slate-800" href="/">Home Decor</a></li>
  </ul>
</div>
