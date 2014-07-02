<?php
    
    class Book {
        
		protected $id, $titre, $autheur, $langue;
        
        public function __construct($titre, $autheur, $langue=null, $id=null) {
            $this->titre = $titre;
			$this->autheur = $autheur;
			$this->langue = $langue;
        }
		
		public function __get($prop) {
			return $this->$prop;
		}
		
		public function __set($prop, $val) {
			$this->$prop = $val;
		}
		
		public function save() {
			
		}
		
		public function delete() {
			
		}
		
		public function update (Book $book) {
			
		}
    }	    
	
?>