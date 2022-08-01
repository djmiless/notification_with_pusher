
const ckeditor = CKEDITOR.replace("post_content")
const createPostForm = document.querySelector("#create-post-form");
const createPostFormBtn = document.querySelector("#create-post-form-btn");


createPostFormBtn.addEventListener("submit", async function(event){
    event.preventDefault();

    let post_title = createPostForm.post_title.value.trim();
    let post_content = ckeditor.getData();

    if(post_title.length != 0 && post_content.length != 0){
        //proceed
        const feedback = await axios.post("/create-push", {
            post_title: post_title,
            post_content: post_content
        });

        if(feedback){
            alert("Post has been sent to users");
        }
    }
})