<template>
  <div>
    <div>
      <div class="claimHeader lighten-3">
        <p class="claimNumber align-center mt-3 mx-5">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="newClaim mt-3 mx-5">FEATURE CLAIM</p>
        <v-spacer></v-spacer>
        <p class="viewDetails mt-3 mr-5"><b>View Details</b></p>
      </div>
      <div class="mt-3">
        <router-link to="/" style="text-decoration: none">
          <v-btn  id="notActiveBtn" class="pa-5 mr-1 text-subtitle-2" elevation="0" >
            Claim Details</v-btn
          ></router-link
        >
        <v-btn class="pa-5 " id="activeBtn" 
          >Assessment Sheet</v-btn
        >
        <v-divider></v-divider>
      </div>
    </div>
    <div class="AssessmentSection">
      <v-img
        src="../assets/NoRecordsFound.jpg"
        height="200"
        width="300"
        class="mx-auto"
      />

      <router-link to="/assessmentSheet" style="text-decoration: none"
        ><v-btn class="AssessmentBtn white--text text-caption" color="#1EBBD9">
          <v-icon
            style="  position:relative
            top:0
            left:0"
          >
            mdi-plus-box-outline</v-icon
          ><v-divider vertical class="white mx-2"></v-divider> Add
          Assessment</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.AssessmentSection {
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 100px;
}
</style>
