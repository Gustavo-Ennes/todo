<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Todo</h2>
            <form>
                <div class="row">
                    <div class="form-group col-12">
                        <label htmlFor="title">Title</label>
                        <input type="text" class="form-control" v-model="title" name="title" id="title" aria-describedby="emailHelp" placeholder="Todo title" />
                    </div>
                    <div class="form-group col-12">
                        <label htmlFor="description">Description</label>
                        <textarea type="textArea" class="form-control" v-model="description" name="description" id="description" placeholder="Anything you want about this todo...." rows=6></textarea>
                    </div>
                </div>
                <input type="hidden" v-model="status" name="status" id="status" aria-describedby="emailHelp" />

                <button type="button" @click='createTodo()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data() {
    return {
      title: '',
      description: '',
      status: 'todo'
    }
  },
  methods: {
      createTodo() {
          console.log(this.title);
          const payload = {
              title: this.title,
              description: this.description,
              status: this.status
          }
          this.$emit('createTodo', payload);
          this.clearForm();
      },
      clearForm() {
          this.title = "";
          this.description = "";
      }
  }
}
</script>