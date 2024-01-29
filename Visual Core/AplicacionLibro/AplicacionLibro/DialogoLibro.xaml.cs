using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace AplicacionLibro
{
    /// <summary>
    /// Lógica de interacción para DialogoLibro.xaml
    /// </summary>
    public partial class DialogoLibro : Window
    {
        private LogicaNegocio logi;
        private Libro libro;
        public DialogoLibro(LogicaNegocio logi)
        {
            InitializeComponent();
            this.logi = logi;
            libro = new Libro();
            this.DataContext = libro;
        }

        private void cancelar(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void aceptar(object sender, RoutedEventArgs e) {
            logi.Add(libro);
            libro = new Libro();
            this.DataContext = libro;
            this.Close();
        }
    }
}
