export default function Navbar(){

return(

<header className="w-full border-b bg-white sticky top-0 z-50">

<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

<div className="flex items-center gap-2 font-semibold text-lg">
🐼 Maobai
</div>

<div className="flex items-center gap-4">

<button className="text-gray-600 hover:text-black">
Login
</button>

<button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
Start Learning
</button>

</div>

</div>

</header>

)

  }
