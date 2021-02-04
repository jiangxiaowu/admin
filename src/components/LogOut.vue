<script>
export default {
  beforeCreate() {
    this.$AV.User.logOut();

    // currentUser 变为 null
    const currentUser = this.$AV.User.current();
    if (currentUser === null) {
      return this.$router.push("/login");
    }
  },
};
</script>
