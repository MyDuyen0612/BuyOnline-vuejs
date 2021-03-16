<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 mt-7 pt-7">
        <div class="row z-depth-3">
          <div class="col-sm-4 bg-info rounded-left">
            <div class="card-block text-center text-white">
              <i class="fas fa-user fa-7x mt-5"></i>
              <h2 class="font-weight-bold mt-4">Dien Dien</h2>
              <i class="far fa-edit fa-2x mb-4"></i>
            </div>
          </div>
          <div class="col-sm-8 bg-white rounded-right">
            <h3 class="mt-3 text-center">Information</h3>
            <hr class="bg-primary mt-0 w-25" />
            <div class="row">
              <div class="col-sm-6">
                <p class="font-weight-bold">Email:</p>
                <h6 class="text-muted">mymymy@gmail.com</h6>
              </div>
              <div class="col-sm-6">
                <p class="font-weight-bold">Phone:</p>
                <h6 class="text-muted">098777777</h6>
              </div>
            </div>
            <hr class="bg-primary" />
            <div class="row">
              <div class="col-sm-6">
                <p class="font-weight-bold">Dia chi:</p>
                <h6 class="text-muted">School</h6>
              </div>
            </div>
            <hr class="bg-primary" />
            <ul class="list-unstyled d-flex justify-content-center mt-4">
              <li>
                <a href="#!"
                  ><i class="fab fa-facebook-f px-3 h4 text-info"></i
                ></a>
              </li>
              <li>
                <a href="#!"
                  ><i class="fab fa-twitter px-3 h4 text-info"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
</style>