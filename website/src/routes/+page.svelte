<script>
import { goto } from '$app/navigation';

function login_page() {
    goto('login');
}

</script>

<div class="text-6xl"><h1>Landing Page</h1></div>


<a href="login" role="button" class="bg-slate-500 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full">
    Log In
</a>