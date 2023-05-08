<div class="flex flex-wrap pt-20 text-white">
	<div class="w-full md:w-1/3 px-4">
		<h2 class="text-lg font-medium mb-2 text-center">Selection Fields</h2>
		  <!-- Left -->
		  <div class="mb-4">
			<label for="username" class="block text-white font-bold mb-2">Card Name:</label>
			<input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Card Name">
			  </div>


			  <div class="mb-4">
				<label for="description" class="block text-white font-bold mb-2">Description:</label>
				<textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description for Spellcard"></textarea>
			  </div>
<br>
			  <div class="grid grid-cols-3 gap-2">
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag1" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag2" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag3" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag4" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag5" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag6" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag7" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag8" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag9" />
			  </div>
<br>
<br>
			  <div class="grid grid-cols-6 gap-4">
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😀</option>
					<option>😁</option>
					<option>😂</option>
					<option>😃</option>
					<option>😄</option>
					<option>😅</option>
					<option>😆</option>
					<option>😉</option>
					<option>😊</option>
					<option>😋</option>
					<option>😎</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😍</option>
					<option>😘</option>
					<option>😜</option>
					<option>😝</option>
					<option>😞</option>
					<option>😠</option>
					<option>😡</option>
					<option>😢</option>
					<option>😤</option>
					<option>😨</option>
					<option>😩</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😪</option>
					<option>😫</option>
					<option>😭</option>
					<option>😰</option>
					<option>😱</option>
					<option>😲</option>
					<option>😳</option>
					<option>😴</option>
					<option>😵</option>
					<option>😷</option>
					<option>🙁</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>🙂</option>
					<option>🙃</option>
					<option>🙄</option>
					<option>🤔</option>
					<option>🤗</option>
					<option>🤠</option>
					<option>🤡</option>
					<option>🤢</option>
					<option>🤤</option>
					<option>🤥</option>
					<option>🤩</option>
				  </select>
				  
				</div>
				<div>
					<select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					  <option>🙂</option>
					  <option>🙃</option>
					  <option>🙄</option>
					  <option>🤔</option>
					  <option>🤗</option>
					  <option>🤠</option>
					  <option>🤡</option>
					  <option>🤢</option>
					  <option>🤤</option>
					  <option>🤥</option>
					  <option>🤩</option>
					</select>
					
				  </div>
				  <div>
					<select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					  <option>🙂</option>
					  <option>🙃</option>
					  <option>🙄</option>
					  <option>🤔</option>
					  <option>🤗</option>
					  <option>🤠</option>
					  <option>🤡</option>
					  <option>🤢</option>
					  <option>🤤</option>
					  <option>🤥</option>
					  <option>🤩</option>
					</select>
					
				  </div>
			</div>

			<br>


			<div class="flex justify-evenly text-black">
				<!-- Public/Private selection box -->
				<div class="flex flex-col">
				  <label for="privacy" class="mb-1 font-medium text-white">Privacy:</label>
				  <select id="privacy" name="privacy" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option value="public">Public</option>
					<option value="private">Private</option>
				  </select>
				</div>
				
				<!-- Link/Canvas/Game/Ad selection box -->
				<div class="flex flex-col">
				  <label for="type" class="mb-1 font-medium text-white">Type:</label>
				  <select id="type" name="type" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option value="link">Link</option>
					<option value="canvas">Canvas</option>
					<option value="game">Game</option>
					<option value="ad">Ad</option>
				  </select>
				</div>
			  </div>
	</div>




	<!-- Center Column -->
	<div class="w-full md:w-1/3 px-4">
	  <h2 class="text-lg font-medium mb-2 text-center">Preview</h2>
	  <div class="max-w-8x1 flex justify-center overflow-x-auto bg-transparent p-0.5">
		<div class="overflow-y-auto">
a
		  <div class="flex justify-center">
			<img class="h-15 top-0 z-0 mb-0 w-40" src="/CardAura_BlueCheemsMagic.gif" alt="spellcard" />
		  </div>
		</div>
	  </div>
	</div>







	
  
<!-- Right Column -->
<div class="w-full md:w-1/3 px-4">
	<h2 class="text-lg font-medium mb-2 text-center">Selection Fields</h2>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="avatar">
			Avatar:
		</label>
		<input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="avatar" type="file" accept="image/*">
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="namePlateImage">
			Name Plate Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-blackblack leading-tight focus:outline-none focus:shadow-outline" id="namePlateImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="descriptionImage">
			Description Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="descriptionImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="statsImage">
			Stats Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="statsImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="bottomAuraImage">
			Bottom Aura Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="bottomAuraImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>
</div>


	  
	  <!-- more fields for selection fields -->
	</div>
