<?php
namespace lib3dduo\casualCrossing\metabot\dataBinding;

use \lib3dduo\database\Database;
use \lib3dduo\database\Data;

class TemplateType extends DataBinder{

	public function getData(){
		$where = $this->buildWhereClause('template_type', 't');
		
		$data = $this->getDB()->select('t.*
			FROM template_type t
			WHERE '.$where);
		
		
		return $data;
	}
	
	public function addData($id){
		$data = new Data('template_type');
		$data->addString('name', $_POST['name']);
		
		if($id){
			$this->getDB()->update($data, 'id=?', $id);
		}else{
			$id = $this->getDB()->insert($data);
		}
		return $id;
	}
	
	public function deleteData($id){
		$this->getDB()->delete('template_type', 'id=?', $id);
	}
}