function confirmDelete(){
    const isConfirmed = confirm("Are you sure you want to delete this post?");
    if(isConfirmed) {
        deletePost();
    } else{
        alert("Post deletion cancelled.");
    }
};

function deletePost(){
   alert("post deleted successfully.");
}