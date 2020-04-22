# copy_google_driver_tree_folder
可以複製 google drive 指定資料夾中 所有的資料夾及檔案 到 目標資料夾

用法簡單

```
function go2() {
  var from_folder_id = "1qK64Qqjb4aaXbnqyEnBu6Oz" // <- 來源資料夾id
  var to_folder_id   = "1qj9eDd19SgJ9hDWINRvhlnc" // <- 目標資料夾id
  clone_folder(from_folder_id, to_folder_id)
}
```

**程式碼主要是 de 掉 [這位寫的](https://www.labnol.org/code/19979-copy-folders-drive) bug 這樣**
