import "./styles.css";
import NameEditor from "./NameEditor";
import PhoneEdit from "./PhoneEdit";

export default function App() {
  return (
    <div>
      <div class="shadow-xl ml-4 mr-4 mt-3 bg-gray-200 shadow-slate-200  font-bold">
        Profile
      </div>

      <div
        class="p-6 mt-4 flex tracking-wide text-sm sm:w-1/2 lg:w-1/4 text-white mx-4
rounded-lg shadow-xl bg-orange-500 whitespace-pre-wrap shadow-lg shadow-orange-300/50"
      >
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold
-coins-6.png"
          class="justify-self-end h-auto max-w-full

rounded-lg w-1/2 lg:w-1/4"
        />
        Total Savings ₹0.0
      </div>

      <div class="shadow-xl ml-4 mr-4 mt-7 bg-gray-200 shadow-slate-200  font-bold">
        Name
      </div>

      <div className="container ml-4 mx-auto mt-4">
        <NameEditor />
      </div>

      <div class="shadow-xl ml-4 mr-4 mt-7 bg-gray-200 shadow-slate-200  font-bold">
        Phone
      </div>

      <div className="container ml-4 mx-auto mt-4">
        <PhoneEdit />
      </div>

      <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
          <a
            href="https://q9hjw1.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-home"
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="home"
            >
              <path
                fill="#200E32"
                d="M6.64373233,18.7821107 L6.64373233,15.7152449 C6.64371685,14.9380902 7.27567036,14.3067075 8.05843544,14.3018198 L10.9326107,14.3018198 C11.7188748,14.3018198 12.3562677,14.9346318 12.3562677,15.7152449 L12.3562677,15.7152449 L12.3562677,18.7732212 C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20 L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941 17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541 19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253 18.1046183,5.96350064 L11.4429783,0.674268354 C10.2785132,-0.250877524 8.61537279,-0.22099178 7.48539114,0.745384082 C7.48539114,0.745384082 0.967012253,5.96350064 0.967012253,5.96350064 C0.37274068,6.42082162 0.0175522924,7.11956262 0,7.86584638 L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20 L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734 6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525 6.60791706,18.7821107 L6.64373233,18.7821107 Z"
                transform="translate(2.5 2)"
              ></path>
            </svg>
            <span class="sr-only">Home</span>
          </a>
          <div
            id="tooltip-home"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://z6g6jf.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-wallet"
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="bag"
            >
              <path
                fill="#200E32"
                d="M6.4229,0.7125 C8.0229,-0.2375 10.0229,-0.2375 11.6229,0.7125 C13.2229,1.6625 14.1629,3.4125 14.0929,5.2625 L14.0929,5.2625 L14.0929,5.4925 C15.3529,5.4925 16.6829,6.3725 17.1429,8.5125 L17.1429,8.5125 L17.9129,14.5025 C18.4839,18.4125 16.2129,20.0025 13.1629,20.0025 L13.1629,20.0025 L4.8729,20.0025 C1.8139,20.0025 -0.5271,18.9025 0.1029,14.5025 L0.1029,14.5025 L0.8829,8.5125 C1.0029,7.6225 1.4329,6.7925 2.1029,6.1825 C2.6139,5.7335 3.2729,5.4925 3.9529,5.4925 L3.9529,5.4925 L3.9529,5.2625 C3.8729,3.4125 4.8239,1.6625 6.4229,0.7125 Z M11.8929,8.7125 C11.4039,8.7125 11.0029,9.1025 11.0029,9.5925 C11.0029,10.0725 11.4039,10.4725 11.8929,10.4725 C12.1229,10.4725 12.3529,10.3825 12.5129,10.2125 C12.6829,10.0525 12.7729,9.8225 12.7729,9.5925 C12.7729,9.1025 12.3729,8.7125 11.8929,8.7125 Z M6.0929,8.7125 C5.6029,8.7125 5.2029,9.1025 5.2029,9.5925 C5.2029,10.0725 5.6029,10.4725 6.0929,10.4725 C6.5829,10.4725 6.9729,10.0725 6.9729,9.5925 C6.9729,9.1025 6.5829,8.7125 6.0929,8.7125 Z M9.0029,1.7425 C7.0529,1.7425 5.4729,3.3225 5.4729,5.2625 L5.4729,5.2625 L5.4729,5.4835 L12.5429,5.4835 L12.5429,5.2625 C12.5429,3.3225 10.9629,1.7425 9.0029,1.7425 Z"
                transform="translate(3 2)"
              ></path>
            </svg>

            <span class="sr-only">Wallet</span>
          </a>
          <div
            id="tooltip-wallet"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Order
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://rivuh9.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-settings"
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              id="user"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Settings</span>
          </a>
          <div
            id="tooltip-settings"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://dhjvkh.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-profile"
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="settings"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
            </svg>
            <span class="sr-only">Profile</span>
          </a>
          <div
            id="tooltip-profile"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
}
