function go() {
  var from_folder_id = "1qK64Qqjb4aaXbnqyEnBu6OzxmFUK8MhN"
  var to_folder_id   = "1qj9eDd19SgJ9hDWINRvhlncNWiYFkiOJ"
  clone_folder(from_folder_id, to_folder_id)
}
//=================================================================================
function clone_folder(from_folder_id, to_folder_id) {
  var source = DriveApp.getFolderById(from_folder_id)
  var target = DriveApp.getFolderById(to_folder_id)

  var files   = source.getFiles();
  while(files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), target);
  }

  var source_b = source.getFolders()
  while(source_b.hasNext()) {
    var folder = source_b.next()
    var folderName = folder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(folder, targetFolder)
  }
}
//=================================================================================
function copyFolder(source, target) {

  var folders = source.getFolders();
  var files   = source.getFiles();

  while(files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }

}
