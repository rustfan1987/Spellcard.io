<!-- Modal.svelte -->
<script lang="ts">
    export let showModal = false;
    export let closeModal: () => void;
  
    function handleBackdropClick(event: MouseEvent | KeyboardEvent) {
      if (
        (event instanceof MouseEvent && event.target === event.currentTarget) ||
        (event instanceof KeyboardEvent && (event.key === "Enter" || event.key === " "))
      ) {
        closeModal();
      }
    }
  </script>
  
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 {showModal ? 'block' : 'hidden'}"
    on:click={handleBackdropClick}
    on:keydown={handleBackdropClick}
    tabindex="0"
    role="button"
    aria-label="Close modal by clicking on the backdrop"
  >
    <div class="relative bg-white rounded-lg shadow-md w-full max-w-lg p-6">
      <slot></slot>
      <button
        class="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        on:click={closeModal}
        on:keydown={handleBackdropClick}
        tabindex="0"
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  </div>