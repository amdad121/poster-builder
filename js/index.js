document.getElementById('app').innerHTML = `
<div class="grid md:grid-cols-2">
    <div class="border rounded-lg min-h-screen m-4 p-4">
        <h2 class="bg-white py-2 px-4 flex gap-2 items-center justify-center rounded -mt-7 mb-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            Components
        </h2>

        <div class="space-y-6">
            <div id="heading-content" class="border rounded p-3 relative hidden">
                <span class="font-semibold bg-gray-200 px-2 text-xs rounded absolute -top-2">Heading</span>
                <button id="heading-close" onclick="headingContent()"
                    class=" font-semibold bg-white w-5 h-5 text-xs rounded-full rounded absolute text-center leading-none -top-2 -right-2 text-red-600 shadow">X
                </button>
                <div class="my-4">
                    <input type="text" id="heading-value" onkeyup="headingValue(this)" placeholder="Dashboard"
                        class="bg-white py-1 px-4 border rounded w-full focus:outline-none">
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <button id="left" onclick="headingAlign('text-left')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            Left
                        </button>
                        <button id="center" onclick="headingAlign('text-center')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            Center
                        </button>
                        <button id="right" onclick="headingAlign('text-right')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            Right
                        </button>
                    </div>
                    <div>
                        <button id="blue" onclick="headingColor('text-blue-500')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <span class="w-5 h-5 bg-blue-500 rounded"></span>
                            Blue
                        </button>
                        <button id="black" onclick="headingColor('text-black')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <span class="w-5 h-5 bg-black rounded"></span>
                            Black
                        </button>
                        <button id="green" onclick="headingColor('text-green-500')" class="inline-flex items-center gap-1 bg-white px-2 py-1 rounded shadow">
                            <span class="w-5 h-5 bg-green-500 rounded"></span>
                            Green
                        </button>
                    </div>
                </div>
            </div>

            <div id="image-content" class="border rounded p-3 relative hidden">
                <span class=" font-semibold bg-gray-200 px-2 text-xs rounded absolute -top-2">Image</span>
                <button id="image-close" onclick="imageContent(this)"
                    class=" font-semibold bg-white w-5 h-5 text-xs rounded-full rounded absolute text-center leading-none -top-2 -right-2 text-red-600 shadow">X
                </button>
                <div class="mt-4">
                    <label>
                        <input type="file" onchange="previewImage(event)" class="hidden">
                        <div
                            class="border-2 bg-white border-dashed p-4 grid place-items-center rounded py-14 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            <h3>Click to upload or drag and drop</h3>
                            <p>SVG, PNG, JPG, or GIF (MAX 800x400px)</p>
                        </div>
                    </label>
                </div>
            </div>

            <div id="description-content" class="border rounded p-3 relative hidden">
                <span class=" font-semibold bg-gray-200 px-2 text-xs rounded absolute -top-2">Description</span>
                <button id="description-close" onclick="descriptionContent(this)"
                    class="font-semibold bg-white w-5 h-5 text-xs rounded-full rounded absolute text-center leading-none -top-2 -right-2 text-red-600 shadow">X
                </button>
                <div class="mt-4">
                    <textarea id="description-value" onkeyup="descriptionValue(this)"
                        class="bg-white py-2 px-3 border rounded w-full focus:outline-none" cols="3"
                        rows="3"></textarea>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <h3 id="items" class="font-semibold text-center text-lg">Items</h3>
            <div id="items-content" class="mt-4 flex gap-4">
                <button id="heading" onclick="headingContent()"
                    class="flex-1 bg-yellow-200 hover:bg-yellow-300 text-yellow-800 py-1 px-4 rounded shadow">
                    Heading
                </button>
                <button id="image" onclick="imageContent(this)"
                    class="flex-1 bg-green-200 hover:bg-green-300 text-green-800 py-1 px-4 rounded shadow">
                    Image
                </button>
                <button id="description" onclick="descriptionContent(this)"
                    class="flex-1 bg-blue-200 hover:bg-blue-300 text-blue-800 py-1 px-4 rounded shadow">
                    Description
                </button>
            </div>
        </div>
    </div>
    <div class="border rounded min-h-screen m-4 p-4 relative">
        <h2 class="bg-white py-2 px-4 flex gap-2 items-center justify-center rounded -mt-7 mb-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                <path fill-rule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                    clip-rule="evenodd" />
                <path
                    d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
            </svg>
            Preview
        </h2>

        <div id="content" class="space-y-4">
            <h1 id="heading-preview" class="font-semibold text-2xl hidden"></h1>
            <img id="image-preview" class="hidden" src="" alt="">
            <p id="description-preview" class="hidden"></p>
        </div>

        <div class="mb-8 pb-4">
            <button id="download" onclick="downloadImage(event)"
                class="border px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 absolute bottom-4 left-4">
                Download
            </button>
        </div>
    </div>
</div>
`;

const items = document.querySelector('#items');

const itemsEmptyCheck = () => {
    const itemsContent = document.querySelector('#items-content');

    const hiddenElementsInsideDiv = itemsContent.querySelectorAll('.hidden');
    const numberOfHiddenElements = hiddenElementsInsideDiv.length;

    if (numberOfHiddenElements === 3) {
        items.classList.add('hidden');
    } else {
        items.classList.remove('hidden');
    }
};

const heading = document.querySelector('#heading');

const headingContent = () => {
    const headingContent = document.querySelector('#heading-content');
    const headingPreview = document.querySelector('#heading-preview');

    headingContent.classList.toggle('hidden');
    headingPreview.classList.toggle('hidden');
    heading.classList.toggle('hidden');

    itemsEmptyCheck();
};

const headingValue = (e) => {
    const headingPreview = document.querySelector('#heading-preview');
    headingPreview.innerHTML = e.value;
};

const headingAlign = (cls) => {
    const align = document.querySelector('#heading-preview');
    let classes = ['text-left', 'text-center', 'text-right'];

    align.classList.remove(...classes);
    align.classList.add(cls);
};

const headingColor = (color) => {
    const align = document.querySelector('#heading-preview');
    let classes = ['text-green-500', 'text-blue-500', 'text-black'];

    align.classList.remove(...classes);
    align.classList.add(color);
};

const image = document.querySelector('#image');

const imageContent = () => {
    const imageContent = document.querySelector('#image-content');
    const imagePreview = document.querySelector('#image-preview');

    imageContent.classList.toggle('hidden');
    imagePreview.classList.toggle('hidden');
    image.classList.toggle('hidden');

    itemsEmptyCheck();
};

const previewImage = (event) => {
    const fileInput = event.target;
    const imagePreview = document.getElementById('image-preview');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        imagePreview.src = '';
    }
};

const description = document.querySelector('#description');

const descriptionContent = () => {
    const descriptionContent = document.querySelector('#description-content');
    const descriptionPreview = document.querySelector('#description-preview');

    descriptionContent.classList.toggle('hidden');
    descriptionPreview.classList.toggle('hidden');
    description.classList.toggle('hidden');

    itemsEmptyCheck();
};

const descriptionValue = (e) => {
    const descriptionPreview = document.querySelector('#description-preview');
    descriptionPreview.innerHTML = e.value;
};

const downloadImage = () => {
    const content = document.querySelector('#content');

    content.style.display = 'block';
    content.style.verticalAlign = 'bottom';

    html2canvas(content).then(function (canvas) {
        const imageDataURL = canvas.toDataURL();

        const downloadLink = document.createElement('a');
        downloadLink.href = imageDataURL;
        downloadLink.download = 'generate_image.png';

        downloadLink.click();
    });
};
